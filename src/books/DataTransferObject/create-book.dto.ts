import { IsNotEmpty, IsInt, Matches } from 'class-validator';

export class createBookDto {
  @IsNotEmpty()
  @Matches(/[a-zA-Z0-9_-]/)
  title: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsInt()
  year: string;
}
