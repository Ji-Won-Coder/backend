import { IsBoolean, IsDate, IsEmail, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  names_user: string;

  @IsString()
  surnames_user: string;

  @IsString()
  country_user: string;

  @IsNumber()
  @IsPhoneNumber()
  cell_phone_user: number;

  @IsString()
  @IsDate()
  birthday_date_user: Date;

  @IsEmail()
  @IsString()
  email_user: string;

  @IsBoolean()
  active_user: boolean;
  
  @IsString()
  status: string;
}
