import { BadRequestException, Injectable, InternalServerErrorException,Logger, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { paginationDto } from './dto/pagination.dto';
import {validate as isUUID} from 'uuid'


@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService');


  constructor(


    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  
  ){}
  
    async create(createProductDto: CreateProductDto) {
    try {
      const product= this.productRepository.create(createProductDto) //crear un producto con sus propiedades
      await this.productRepository.save(product); //guarda el producto en bd

      return product;

    } catch (error) {
      this.handleDBExceptions(error);
    }
    }
  
    findAll(pagination:paginationDto) {

      const {limit =10, offset = 0 }=pagination

     return this.productRepository.find({
      take:limit,
      skip:offset,
      //todo relaciones
     });
    }
  
    async findOne(term:string) {
      

      let product: Product;

      //inyeccion de dependencias (sql)x
      if(isUUID(term)){
      product = await this.productRepository.findOneBy({id:term});
      }else{
       const queryBuilder = this.productRepository.createQueryBuilder();
       product = await queryBuilder
       .where('UPPER(title) =:title or slug =:slug',{
         title:term.toUpperCase(),
         slug: term.toLowerCase(),
       }).getOne();
      }


      //const product = await this.productRepository.findOneBy({id});
      if(!product) throw new NotFoundException (`Product whit id ${term} not found `);

      return product
    }
  
    async update(id: string, updateProductDto: UpdateProductDto) {

      const product = await this.productRepository.preload({
        id:id,
        ...updateProductDto 
      })
      if(!product) throw new NotFoundException(`product with id: ${id} not found`)

      try {
        await this.productRepository.save(product);
      return product;
      } catch (error) {
        this.handleDBExceptions(error);
      }

    }

     async remove(id: string) {
      const product = await this.findOne(id);
      await this.productRepository.remove(product);
     }



     //ERROR CONTROLADO
      private handleDBExceptions(error:any){//todo tipo de error
       if(error.code == '23505' )
       throw new BadRequestException(error.detail);

       this.logger.error(error)
       throw new InternalServerErrorException('Unexpected error, check server logs');
      }
}

  
