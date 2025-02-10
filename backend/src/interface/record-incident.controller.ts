// src/interface/record-incident.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RecordIncidentService } from '../application/record-incident.service';
import { Incident } from '../domain/incident.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('incidents')
@Controller('incidents')
export class RecordIncidentController {
    constructor(
        private readonly recordIncidentService: RecordIncidentService,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Record an incident for a motorcycle' })
    @ApiResponse({ status: 201, description: 'Incident recorded successfully.' })
    @ApiResponse({ status: 400, description: 'Bad request.' })
    async record(
        @Body() body: { motorcycleId: string; description: string; type: 'accident' | 'breakdown' },
    ): Promise<Incident> {
        const { motorcycleId, description, type } = body;
        return await this.recordIncidentService.execute(motorcycleId, description, type);
    }
}
