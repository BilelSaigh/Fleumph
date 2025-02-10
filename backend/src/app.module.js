"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// src/app.module.ts
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const driver_entity_1 = require("./domain/driver.entity");
const motorcycle_entity_1 = require("./domain/motorcycle.entity");
const maintenance_entity_1 = require("./domain/maintenance.entity");
const incident_entity_1 = require("./domain/incident.entity");
const driver_repository_1 = require("./infrastructure/driver.repository");
const motorcycle_repository_1 = require("./infrastructure/motorcycle.repository");
const schedule_maintenance_service_1 = require("./application/schedule-maintenance.service");
const assign_motorcycle_service_1 = require("./application/assign-motorcycle.service");
const record_incident_service_1 = require("./application/record-incident.service");
const schedule_maintenance_controller_1 = require("./interface/schedule-maintenance.controller");
const assign_motorcycle_controller_1 = require("./interface/assign-motorcycle.controller");
const record_incident_controller_1 = require("./interface/record-incident.controller");
const incident_controller_1 = require("./interface/incident.controller");
const incident_service_1 = require("./application/incident.service");
const incident_repository_1 = require("./infrastructure/incident.repository");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: ':memory:',
                entities: [driver_entity_1.Driver, motorcycle_entity_1.Motorcycle, maintenance_entity_1.Maintenance, incident_entity_1.Incident],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([driver_entity_1.Driver, motorcycle_entity_1.Motorcycle, maintenance_entity_1.Maintenance, incident_entity_1.Incident]),
        ],
        controllers: [
            schedule_maintenance_controller_1.ScheduleMaintenanceController,
            incident_controller_1.IncidentController,
            assign_motorcycle_controller_1.AssignMotorcycleController,
            record_incident_controller_1.RecordIncidentController,
        ],
        providers: [
            incident_service_1.IncidentService,
            driver_repository_1.DriverRepository,
            motorcycle_repository_1.MotorcycleRepository,
            incident_repository_1.IncidentRepository,
            schedule_maintenance_service_1.ScheduleMaintenanceService,
            assign_motorcycle_service_1.AssignMotorcycleService,
            record_incident_service_1.RecordIncidentService,
        ],
    })
], AppModule);
