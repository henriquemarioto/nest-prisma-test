import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsInt()
  @IsOptional()
  age?: number | null;
}
