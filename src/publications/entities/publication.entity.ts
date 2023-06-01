import { Column, Entity,ManyToOne,PrimaryColumn, PrimaryGeneratedColumn,} from "typeorm";
import { User } from "src/users/entities/user.entity";

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
  

  @ManyToOne(
    ()=> User,
    (user) =>user.Publication
  )
  user: User;

}
