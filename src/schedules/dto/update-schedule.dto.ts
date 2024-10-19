import { IsDate, IsOptional, IsInt } from 'class-validator';

export class UpdateScheduleDto {
  @IsOptional()
  @IsInt()
  userId?: number;

  @IsOptional()
  @IsDate()
  date?: Date;
}
