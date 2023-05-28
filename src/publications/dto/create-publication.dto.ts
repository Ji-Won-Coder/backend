import { IsBoolean, IsDate } from "class-validator";

export class CreatePublicationDto {

    id_puclications:string;
    id_user:string;
    id_obra:string;
    
    @IsBoolean()
    active:Boolean;

    @IsDate()
    created_at:Date; 



}
