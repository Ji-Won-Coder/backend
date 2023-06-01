import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn,} from "typeorm";
import {user} from "src/users/entities/user.entity";

@Entity()
export class Publication {

  @PrimaryGeneratedColumn('uuid')
  id_publications: string;

  @PrimaryColumn('int')
  id_user: string;

  @PrimaryColumn('int')
  id_obra: string;

  @Column('boolean')
  active: boolean;

  @Column({type:"timestamp", default:()=> "CURRENT_TIMESTAMP"})
  created_at: Date;
  

  @ManyToMany(
    ()=> user,
    (user) =>user.Publication
  )
  id_user:user;

}
