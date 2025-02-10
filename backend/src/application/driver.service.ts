// src/application/driver.service.ts
import { Injectable } from '@nestjs/common';
import { DriverRepository } from '../infrastructure/driver.repository';
import { Driver } from '../domain/driver.entity';

@Injectable()
export class DriverService {
    constructor(private driverRepository: DriverRepository) {}

    // Récupérer tous les conducteurs
    async getAllDrivers(): Promise<Driver[]> {
        return this.driverRepository.findAll();
    }

    // Récupérer un conducteur par ID
    async getDriverById(id: string): Promise<Driver> {
        return this.driverRepository.findOne(id);
    }

    // Créer un nouveau conducteur
    async createDriver(driver: Driver): Promise<Driver> {
        return this.driverRepository.create(driver);
    }

    // Mettre à jour un conducteur
    async updateDriver(id: string, driver: Driver): Promise<Driver> {
        return this.driverRepository.update(id, driver);
    }

    // Supprimer un conducteur
    async deleteDriver(id: string): Promise<void> {
        return this.driverRepository.delete(id);
    }
}
