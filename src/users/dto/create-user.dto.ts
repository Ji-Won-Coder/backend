import { IsBoolean, IsDate, IsDateString, IsEmail, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  names_user: string;

  @IsString()
  surnames_user: string;

  @IsString()
  country_user: string;

  @IsNumber()
  cell_phone_user: number;

  @IsDateString()
  birthday_date_user: string;

  @IsEmail()
  @IsString()
  email_user: string;

  @IsBoolean()
  active_user: boolean;
  
  @IsString()
  status_user: string;
}
