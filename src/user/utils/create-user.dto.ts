import { IsNotEmpty, IsOptional, IsString, IsEnum } from "class-validator";
import { Roles } from "../schemas/roles.user";


export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsEnum(Roles)
    role?: Roles;
}