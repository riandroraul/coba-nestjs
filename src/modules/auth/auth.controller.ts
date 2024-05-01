import {
  Body,
  Controller,
  Ip,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpDto } from './dto/auth.signup.dto';
import { SignInDto } from './dto/auth.signin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() payload: SignInDto) {
    return this.authService.signIn(payload);
  }

  @Post('signup')
  @UsePipes(new ValidationPipe({ transform: true }))
  signUp(@Body() payload: SignUpDto, @Ip() ip_addr: any) {
    return this.authService.signUp(payload, ip_addr);
  }
}
