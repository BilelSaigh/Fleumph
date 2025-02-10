// src/application/record-incident.service.ts
import { Injectable } from '@nestjs/common';
import { IncidentRepository } from '../infrastructure/incident.repository';
import { Incident } from '../domain/incident.entity';

@Injectable()
export class RecordIncidentService {
    constructor(
        private readonly incidentRepository: IncidentRepository,
    ) {}

    async execute(motorcycleId: string, description: string, type: 'accident' | 'breakdown'): Promise<Incident> {
        // Create a new incident record
        const incident = new Incident(
            this.generateId(),
            motorcycleId,
            new Date(),
            description,
            type,
            false, // initially not repaired
        );

        // Save the incident
        return await this.incidentRepository.save(incident);
    }

    private generateId(): string {
        // Generate a unique ID (in reality, you could use something like UUID)
        return Math.random().toString(36).substr(2, 9);
    }
}
