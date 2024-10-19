import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  // Atualize o método login para salvar o token no banco de dados
  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    // Salva o token no banco de dados
    await this.usersService.updateUserToken(user.id, token);

    return {
      access_token: token,
    };
  }

  // Atualize o método de registro para salvar o token no banco de dados
  async register(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.createUser({ name, email, password: hashedPassword });

    const payload = { email: newUser.email, sub: newUser.id };
    const token = this.jwtService.sign(payload);

    // Salva o token no banco de dados para o novo usuário
    await this.usersService.updateUserToken(newUser.id, token);

    return {
      access_token: token,
    };
  }
}