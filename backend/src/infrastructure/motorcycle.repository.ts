// src/infrastructure/motorcycle.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motorcycle } from '../domain/motorcycle.entity';

@Injectable()
export class MotorcycleRepository {
    constructor(
        @InjectRepository(Motorcycle)
        private motorcycleRepository: Repository<Motorcycle>,
    ) {}

    async findOne(id: string): Promise<Motorcycle> {
        const motorcycle = await this.motorcycleRepository.findOneBy({ id });
        if (!motorcycle) {
            throw new Error(`Motorcycle with id ${id} not found`);
        }
        return motorcycle;
    }

    async create(motorcycle: Motorcycle): Promise<Motorcycle> {
        return this.motorcycleRepository.save(motorcycle);
    }

    async update(id: string, motorcycle: Motorcycle): Promise<Motorcycle> {
        await this.motorcycleRepository.update(id, motorcycle);
        return this.findOne(id);
    }

    async delete(id: string): Promise<void> {
        await this.motorcycleRepository.delete(id);
    }

    async save(motorcycle: Motorcycle): Promise<Motorcycle> {
        return this.motorcycleRepository.save(motorcycle);
    }
}