// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './domain/driver.entity';
import { Motorcycle } from './domain/motorcycle.entity';
import { Maintenance } from './domain/maintenance.entity';
import { Incident } from './domain/incident.entity';
import { DriverRepository } from './infrastructure/driver.repository';
import { MotorcycleRepository } from './infrastructure/motorcycle.repository';
import { ScheduleMaintenanceService } from './application/schedule-maintenance.service';
import { AssignMotorcycleService } from './application/assign-motorcycle.service';
import { RecordIncidentService } from './application/record-incident.service';
import { ScheduleMaintenanceController } from './interface/schedule-maintenance.controller';
import { AssignMotorcycleController } from './interface/assign-motorcycle.controller';
import { RecordIncidentController } from './interface/record-incident.controller';
import {IncidentController} from "./interface/incident.controller";
import {IncidentService} from "./application/incident.service";
import {IncidentRepository} from "./infrastructure/incident.repository";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: ':memory:',
            entities: [Driver, Motorcycle, Maintenance, Incident],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([Driver, Motorcycle, Maintenance, Incident]),
    ],
    controllers: [
        ScheduleMaintenanceController,
        IncidentController,
        AssignMotorcycleController,
        RecordIncidentController,
    ],
    providers: [
        IncidentService,
        DriverRepository,
        MotorcycleRepository,
        IncidentRepository,
        ScheduleMaintenanceService,
        AssignMotorcycleService,
        RecordIncidentService,
    ],
})
export class AppModule {}