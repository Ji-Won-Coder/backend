import { IsBoolean, IsDate } from "class-validator";

export class CreatePublicationDto {
    
    id_puclications:string;
    id_obra:string;
    
    @IsBoolean()
    active:boolean;

    @IsDate()
    created_at:Date; 


}
