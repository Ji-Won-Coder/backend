import { Publication } from "src/publications/entities/publication.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  names_user: string;

  @Column('text',{ unique: true })
  surnames_user: string;

  @Column('text')
  country_user: string;

  @Column('integer')
  cell_phone_user: number;

  @Column({type: 'date'})
  birthday_date_user: string;
  
  @Column('text')
  email_user: string;

  @Column('boolean')
  active_user: boolean;
  
  @Column('text')
  status_user: string;

  @Column({ type: "timestamp",
   default: () => "CURRENT_TIMESTAMP"
   })
  created_at: Date;



   //un usuario puede tener muchas publicaciones.
   @OneToMany(() => Publication,publication => publication.user)
    publication:Publication

}
