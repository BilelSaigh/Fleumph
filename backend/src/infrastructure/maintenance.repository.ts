// src/infrastructure/maintenance.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maintenance } from '../domain/maintenance.entity';

@Injectable()
export class MaintenanceRepository {
    constructor(
        @InjectRepository(Maintenance)
        private maintenanceRepository: Repository<Maintenance>,
    ) {}

    async findByMotorcycleId(motorcycleId: string): Promise<Maintenance[]> {
        return this.maintenanceRepository.find({ where: { motorcycleId } });
    }

    async create(maintenance: Maintenance): Promise<Maintenance> {
        return this.maintenanceRepository.save(maintenance);
    }

    async save(maintenance: Maintenance): Promise<Maintenance> {
        return this.maintenanceRepository.save(maintenance);
    }
}
