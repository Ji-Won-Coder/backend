import { IsBoolean, IsDate, IsOptional, IsString, IsUrl, MinLength } from "class-validator";

export class CreateObraDto {


    @IsString()
    @MinLength(1)
    name_obra:string;

    @IsString()
    @IsOptional()
    descripcion_obra:string;

    @IsUrl()
    image_url_obra:URL;

    @IsBoolean()
    active:boolean;

    @IsDate()
    create_at:Date;


}
