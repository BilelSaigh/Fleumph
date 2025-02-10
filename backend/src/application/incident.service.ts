// src/application/incident.service.ts
import { Injectable } from '@nestjs/common';
import { IncidentRepository } from '../infrastructure/incident.repository';
import { Incident } from '../domain/incident.entity';

@Injectable()
export class IncidentService {
    constructor(private readonly incidentRepository: IncidentRepository) {}

    async findIncidentsByMotorcycle(motorcycleId: string): Promise<Incident[]> {
        return this.incidentRepository.findByMotorcycleId(motorcycleId);
    }

    async recordIncident(incident: Incident): Promise<Incident> {
        return this.incidentRepository.create(incident);
    }
}
