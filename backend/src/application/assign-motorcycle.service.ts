// src/application/assign-motorcycle.service.ts
import { Injectable } from '@nestjs/common';
import { MotorcycleRepository } from '../infrastructure/motorcycle.repository';
import { DriverRepository } from '../infrastructure/driver.repository';
import { Motorcycle } from '../domain/motorcycle.entity';
import { Driver } from '../domain/driver.entity';

@Injectable()
export class AssignMotorcycleService {
    constructor(
        private readonly motorcycleRepository: MotorcycleRepository,
        private readonly driverRepository: DriverRepository,
    ) {}

    async execute(motorcycleId: string, driverId: string): Promise<Motorcycle> {
        // Retrieve the motorcycle and driver
        const motorcycle = await this.motorcycleRepository.findOne(motorcycleId);
        const driver = await this.driverRepository.findOne(driverId);

        // Check if motorcycle and driver exist
        if (!motorcycle) {
            throw new Error('Motorcycle not found');
        }

        if (!driver) {
            throw new Error('Driver not found');
        }

        // Assign the driver to the motorcycle
        motorcycle.driverId = driverId;

        return await this.motorcycleRepository.save(motorcycle);
    }
}
