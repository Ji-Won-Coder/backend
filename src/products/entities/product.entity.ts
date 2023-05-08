import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{

        unique:true,//regle: no pueden haber dos productos con el mismo nombre
    })
    title: string;

    @Column('numeric',{
        default:0
    })
    price: number;

    @Column({type:'text', nullable:true})
    description:string

    @Column('text',{
        unique:true
    })
    slug:string
    
    @Column('int',{
        default:0
    })
    stock:number; 

    @Column('text',{
        array:true
    })
    sizes:string[]

    @Column('text')
    gender: string;

} // (entity)representacion  de la base base de datos
