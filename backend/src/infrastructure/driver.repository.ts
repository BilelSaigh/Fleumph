// src/infrastructure/driver.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from '../domain/driver.entity';

@Injectable()
export class DriverRepository {
    constructor(
        @InjectRepository(Driver)
        private driverRepository: Repository<Driver>,
    ) {}

    async findOne(id: string): Promise<Driver> {
        const driver = await this.driverRepository.findOneBy({ id });
        if (!driver) {
            throw new Error(`Driver with id ${id} not found`);
        }
        return driver;
    }

    async create(driver: Driver): Promise<Driver> {
        return this.driverRepository.save(driver);
    }

    async update(id: string, driver: Driver): Promise<Driver> {
        await this.driverRepository.update(id, driver);
        return this.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.driverRepository.delete(id);
    }

    async findAll(): Promise<Driver[]> {
        return this.driverRepository.find();
    }
}