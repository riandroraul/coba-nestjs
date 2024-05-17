import { ApiProperty } from '@nestjs/swagger';

export class LoginSuccess {
  @ApiProperty({
    example: 'john doe',
    description: 'username unique of each users',
  })
  username: string;

  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'email unique of each users',
  })
  email: string;

  @ApiProperty({
    example: 'adasdasdooifodf.adasasdasdpodpfo.sueuire9ewe',
    description: 'token unique of each users',
  })
  token: string;
}

export class LoginFailed {
  @ApiProperty({ example: 'email or password incorrect' })
  message: string;
  @ApiProperty({ example: 'Bad Request' })
  error: string;
  @ApiProperty({ example: 400 })
  statusCode: number;
}
