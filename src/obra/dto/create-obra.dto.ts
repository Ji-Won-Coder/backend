import { IsBoolean, IsDate, IsOptional, IsString, IsUrl, MinLength } from "class-validator";
import { type } from "os";
import { Url } from "url";

export class CreateObraDto {


    @IsString()
    @MinLength(1)
    name_obra:string;

    @IsString()
    @IsOptional()
    descripcion_obra:string;

    @IsUrl()
    image_url_obra:Url;

    @IsBoolean()
    active:boolean;

    @IsDate({ type:'timestamp',default: ()=>'CURRENT_TIMESTAMP'})
    create_at:Date;

 



}
