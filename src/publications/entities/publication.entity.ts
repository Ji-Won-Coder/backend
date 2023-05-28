import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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

}
