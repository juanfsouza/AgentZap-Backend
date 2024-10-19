import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Supondo que você tenha o PrismaService
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Método para encontrar todos os usuários
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Método para encontrar um usuário por ID
  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }  

  // Método para criar um novo usuário
  async createUser(data: { name: string; email: string; password: string }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  // Método para atualizar um usuário
  async updateUser(id: number, data: { name?: string; email?: string; password?: string }): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  // Método para excluir um usuário
  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  // Método para atualizar o token JWT no banco de dados
  async updateUserToken(userId: number, token: string): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: { token },
    });
  }

  // Método para encontrar um usuário por e-mail
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }
}