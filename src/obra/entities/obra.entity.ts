import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "url";

@Entity()
export class Obra {

    @PrimaryGeneratedColumn('uuid')
    id_obra:string;

    @Column('text')
    name_obra:string;

    @Column('text')
    descripcion_obra:string;

    @Column('image')
    image_url_obra:Url;

    @Column('boolean')
    active:boolean;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at:Date;



}
//column