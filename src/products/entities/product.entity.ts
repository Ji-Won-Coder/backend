import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{

        unique:true,//regle: no pueden haber dos productos con el mismo nombre
    })
    title: string;

    



} // (entity)representacion  de la base base de datos

