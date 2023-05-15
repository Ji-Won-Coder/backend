import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  
  ){}
  
    async create(createProductDto: CreateProductDto) {
    try {
      
      const product= this.productRepository.create(createProductDto) //crear un producto con sus propiedades
      await this.productRepository.save(product); //guarda el producto en bd
      return product;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Ayuda!');
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

  
}

  
