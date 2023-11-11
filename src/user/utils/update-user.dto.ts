import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Roles } from '../schemas/roles.user';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEnum(Roles)
  role?: Roles;
}
