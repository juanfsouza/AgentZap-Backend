import { IsDate, IsInt } from 'class-validator';

export class CreateScheduleDto {
  @IsInt()
  userId: number;

  @IsDate()
  date: Date;
}
