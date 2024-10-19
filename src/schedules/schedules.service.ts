import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Schedule, Prisma } from '@prisma/client';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Injectable()
export class SchedulesService {
  constructor(private prisma: PrismaService) {}

  async createSchedule(data: CreateScheduleDto): Promise<Schedule> {
    return this.prisma.schedule.create({
      data: {
        userId: data.userId,
        date: data.date,
      },
    });
  }

  async findAll(): Promise<Schedule[]> {
    return this.prisma.schedule.findMany();
  }

  async findById(id: number): Promise<Schedule | null> {
    return this.prisma.schedule.findUnique({
      where: { id },
    });
  }

  async updateSchedule(id: number, data: Prisma.ScheduleUpdateInput): Promise<Schedule> {
    return this.prisma.schedule.update({
      where: { id },
      data,
    });
  }

  async deleteSchedule(id: number): Promise<Schedule> {
    return this.prisma.schedule.delete({
      where: { id },
    });
  }
}
