import { IsBoolean, IsDate, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateObraDto {


    @IsString()
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
