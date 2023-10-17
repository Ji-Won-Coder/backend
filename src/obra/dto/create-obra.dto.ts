import { IsBoolean,IsOptional, IsString, IsUrl, } from "class-validator";
import { Url } from "url";

export class CreateObraDto {


    @IsString()
    name_obra:string;

    @IsString()
    @IsOptional()
    descripcion_obra:string;

    @IsUrl()
    image_url_obra:Url;

    @IsBoolean()
    active:boolean;


 



}
