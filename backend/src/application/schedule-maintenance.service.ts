// src/application/schedule-maintenance.service.ts
import { Injectable } from '@nestjs/common';
import { MotorcycleRepository } from '../infrastructure/motorcycle.repository';
import { MaintenanceRepository } from '../infrastructure/maintenance.repository';
import { Motorcycle } from '../domain/motorcycle.entity';
import { Maintenance } from '../domain/maintenance.entity';

@Injectable()
export class ScheduleMaintenanceService {
    constructor(
        private readonly motorcycleRepository: MotorcycleRepository,
        private readonly maintenanceRepository: MaintenanceRepository,
    ) {}

    async execute(motorcycleId: string, description: string, cost: number): Promise<Maintenance> {
        // Retrieve the motorcycle to schedule maintenance for
        const motorcycle = await this.motorcycleRepository.findOne(motorcycleId);

        // Check if the motorcycle exists and needs maintenance
        if (!motorcycle) {
            throw new Error('Motorcycle not found');
        }

        if (!motorcycle.needsMaintenance()) {
            throw new Error('Motorcycle does not need maintenance');
        }

        // Create and save the maintenance record
        const maintenance = new Maintenance(
            this.generateId(),
            motorcycleId,
            new Date(),
            description,
            cost,
        );

        return await this.maintenanceRepository.save(maintenance);
    }

    private generateId(): string {
        // Generate a unique ID (in reality, you could use something like UUID)
        return Math.random().toString(36).substr(2, 9);
    }
}
