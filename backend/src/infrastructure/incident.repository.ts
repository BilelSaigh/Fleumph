// src/infrastructure/incident.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incident } from '../domain/incident.entity';

@Injectable()
export class IncidentRepository {
    constructor(
        @InjectRepository(Incident)
        private incidentRepository: Repository<Incident>,
    ) {}

    async findByMotorcycleId(motorcycleId: string): Promise<Incident[]> {
        return this.incidentRepository.find({ where: { motorcycleId } });
    }

    async create(incident: Incident): Promise<Incident> {
        return this.incidentRepository.save(incident);
    }

    async save(incident: Incident): Promise<Incident> {
        return this.incidentRepository.save(incident);
    }
}
