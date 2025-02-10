// src/interface/schedule-maintenance.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ScheduleMaintenanceService } from '../application/schedule-maintenance.service';
import { Maintenance } from '../domain/maintenance.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('maintenance') // Tag for Swagger documentation
@Controller('maintenance')
export class ScheduleMaintenanceController {
    constructor(
        private readonly scheduleMaintenanceService: ScheduleMaintenanceService,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Schedule maintenance for a motorcycle' }) // Describes the operation
    @ApiResponse({ status: 201, description: 'The maintenance has been scheduled.' })
    @ApiResponse({ status: 400, description: 'Bad request.' })
    async schedule(
        @Body() body: { motorcycleId: string; description: string; cost: number },
    ): Promise<Maintenance> {
        const { motorcycleId, description, cost } = body;
        return await this.scheduleMaintenanceService.execute(motorcycleId, description, cost);
    }
}