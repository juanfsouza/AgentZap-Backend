import { Controller, UseGuards, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from '@prisma/client';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('schedules')
@ApiBearerAuth()
@Controller('schedules')
@UseGuards(JwtAuthGuard)
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Agendamento criado com sucesso.' })
  async create(@Body() createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    return this.schedulesService.createSchedule(createScheduleDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de agendamentos retornada.' })
  async findAll(): Promise<Schedule[]> {
    return this.schedulesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Agendamento encontrado.' })
  async findOne(@Param('id') id: string): Promise<Schedule> {
    return this.schedulesService.findById(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Agendamento atualizado com sucesso.' })
  async update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto): Promise<Schedule> {
    return this.schedulesService.updateSchedule(+id, updateScheduleDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Agendamento excluído com sucesso.' })
  async remove(@Param('id') id: string): Promise<Schedule> {
    return this.schedulesService.deleteSchedule(+id);
  }
}
