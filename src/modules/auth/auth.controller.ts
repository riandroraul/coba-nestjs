import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SignUpDto } from './dto/auth.signup.dto';
import { SignInDto } from './dto/auth.signin.dto';
import { AuthService } from './auth.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoginFailed, LoginSuccess } from 'src/docs/auth/login.response';
import { RegisterFailed, RegisterSuccess } from 'src/docs/auth/regis.response';

@ApiBearerAuth()
@ApiTags('users authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @ApiOperation({ summary: 'endpoint for login' })
  @ApiResponse({
    status: 200,
    description: 'Login Success',
    type: LoginSuccess,
  })
  @ApiResponse({
    status: 400,
    description: 'Login Failed',
    type: LoginFailed,
  })
  @HttpCode(HttpStatus.OK)
  signIn(@Body() payload: SignInDto) {
    return this.authService.signIn(payload);
  }

  @Post('signup')
  @ApiOperation({ summary: 'endpoint for register' })
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({
    status: 201,
    description: 'Registration Success',
    type: RegisterSuccess,
  })
  @ApiResponse({
    status: 400,
    description: 'Registration Failed',
    type: RegisterFailed,
  })
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() payload: SignUpDto, @Ip() ip_addr: any) {
    return this.authService.signUp(payload, ip_addr);
  }
}
