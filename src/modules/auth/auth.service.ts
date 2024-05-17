import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/modules/users/entity/users.entity';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';
import { SignUpDto } from './dto/auth.signup.dto';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/auth.signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async findUserByEmail(email: any): Promise<FindOptionsWhere<Users>> {
    return await this.usersRepository.findOne({
      where: [{ email }],
    });
  }

  async signIn(signInDto: SignInDto) {
    const userExist = await this.findUserByEmail(signInDto.email);
    console.log(userExist);

    const hashedPassword = userExist.password as string;
    if (
      userExist &&
      (await bcrypt.compare(signInDto.password, hashedPassword))
    ) {
      return {
        username: userExist.username,
        email: userExist.email,
        token: 'token',
      };
    }
    throw new BadRequestException('email or password incorrect');
  }

  async signUp(signUpDto: SignUpDto, ip_addr: string): Promise<object> {
    const newUser: Users = {
      user_id: uuidv4(),
      username: signUpDto.username,
      fullname: signUpDto.fullname,
      email: signUpDto.email,
      password: await bcrypt.hash(signUpDto.password, 10),
      isActive: false,
      ip_address: ip_addr,
    };

    const checkUser: FindOptionsWhere<Users> = await this.findUserByEmail(
      signUpDto.email,
    );

    if (checkUser) {
      throw new BadRequestException(
        'Error! The specified email already exists',
      );
    }
    const result = this.usersRepository.save(newUser);
    return { statusCode: 201, message: 'Registration Success' };
  }
}
