import{Injectable} from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './seed-date';


@Injectable()
export class seedService{

   constructor(
      private readonly productsService: ProductsService
   ){}




   async runSeed(){

      await this.insertNewProducts();

    return 'SEED EXECUTED';
   }

   private async insertNewProducts(){
      await this.productsService.deleteAllProducts();

      const products = initialData.products;

      const insertPromise =[];

      products.forEach (product =>{
         insertPromise.push(this.productsService.create(product));
      });
      await Promise.all(insertPromise);
      
      return true;
   }


  

}