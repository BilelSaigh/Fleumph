// src/infrastructure/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motorcycle } from '../domain/motorcycle.entity';
import { Maintenance } from '../domain/maintenance.entity';
import { Incident } from '../domain/incident.entity';
import { MotorcycleRepository } from './motorcycle.repository';
import { MaintenanceRepository } from './maintenance.repository';
import { IncidentRepository } from './incident.repository';
import { DriverService } from '../application/driver.service';
import { DriverController } from '../interface/driver.controller';
import { DriverRepository } from './driver.repository';
import { Driver } from '../domain/driver.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Motorcycle, Maintenance, Incident, Driver]),
    ],
    providers: [MotorcycleRepository, MaintenanceRepository, IncidentRepository, DriverRepository, DriverService],
    controllers: [DriverController],
    exports: [MotorcycleRepository, MaintenanceRepository, IncidentRepository],
})
export class DatabaseModule {}
