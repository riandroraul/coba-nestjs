import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

export class SignUpDto {
  @IsString()
  @MinLength(3)
  @ApiProperty({ example: 'johndoe' })
  username: string;

  @IsEmail()
  @ApiProperty({ example: 'johndoe@gmail.com' })
  email: string;

  @ApiProperty({ example: 'Password@123' })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({ example: 'Password@123' })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Match('password')
  confirmPassword: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'John Doe' })
  fullname: string;
}
