import { ApiProperty } from '@nestjs/swagger';

export class RegisterSuccess {
  @ApiProperty({
    example: 'Registration Success',
  })
  message: string;

  @ApiProperty({
    example: 201,
  })
  statusCode: number;
}

export class RegisterFailed {
  @ApiProperty({
    example: 'Error! The specified email already exists',
  })
  message: string;
  @ApiProperty({ example: 'Bad Request' })
  error: string;
  @ApiProperty({ example: 400 })
  statusCode: number;
}
