import { BadRequestException, Injectable, InternalServerErrorException,Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';


@Injectable()
export class ProductsService {

  private readonly logger = new Logger('ProductsService');


  constructor(


    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  
  ){}
  
    async create(createProductDto: CreateProductDto) {
    try {

      if(!createProductDto.slug){
        createProductDto.slug =createProductDto.title.toLocaleLowerCase().replaceAll(' ','_').replaceAll("'",' ')
      }


      
      const product= this.productRepository.create(createProductDto) //crear un producto con sus propiedades
      await this.productRepository.save(product); //guarda el producto en bd

      return product;

    } catch (error) {
      this.handleDBExceptions(error);
    }
    }
  
    findAll() {
      return `This action returns all products`;
    }
  
    findOne(id: number) {
      return `This action returns a #${id} product`;
    }
  
    update(id: number, _updateProductDto: UpdateProductDto) {
      return `This action updates a #${id} product`;
    }
  
    remove(id: number) {
      return `This action removes a #${id} product`;
    }

    //ERROR CONTROLADO
  private handleDBExceptions(error:any){//todo tipo de error
    if(error.code == '23505' )
      throw new BadRequestException(error.detail);

      this.logger.error(error)
      throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}

  
