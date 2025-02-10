// src/interface/assign-motorcycle.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AssignMotorcycleService } from '../application/assign-motorcycle.service';
import { Motorcycle } from '../domain/motorcycle.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('motorcycles')
@Controller('motorcycles')
export class AssignMotorcycleController {
    constructor(
        private readonly assignMotorcycleService: AssignMotorcycleService,
    ) {}

    @Post('assign')
    @ApiOperation({ summary: 'Assign a motorcycle to a driver' })
    @ApiResponse({ status: 200, description: 'Motorcycle assigned successfully.' })
    @ApiResponse({ status: 400, description: 'Bad request.' })
    async assign(
        @Body() body: { motorcycleId: string; driverId: string },
    ): Promise<Motorcycle> {
        const { motorcycleId, driverId } = body;
        return await this.assignMotorcycleService.execute(motorcycleId, driverId);
    }
}
