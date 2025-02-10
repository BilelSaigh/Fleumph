// src/interface/incident.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { IncidentService } from '../application/incident.service';
import { Incident } from '../domain/incident.entity';

@Controller('incidents')
export class IncidentController {
    constructor(private readonly incidentService: IncidentService) {}

    @Get(':motorcycleId')
    async getIncidentsByMotorcycle(
        @Param('motorcycleId') motorcycleId: string,
    ): Promise<Incident[]> {
        return this.incidentService.findIncidentsByMotorcycle(motorcycleId);
    }

    @Post()
    async createIncident(@Body() incident: Incident): Promise<Incident> {
        return this.incidentService.recordIncident(incident);
    }
}
