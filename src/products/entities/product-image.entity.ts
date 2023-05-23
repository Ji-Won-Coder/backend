import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({name: 'products_images'})
export class CreateProductDto {

@PrimaryGeneratedColumn()
id: number
@Column('text')
url:string;

@ManyToOne( 
    () => Product.images,
    {onDelete:'CASCADE'}
)

product:Product
}