"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
// src/infrastructure/database.module.ts
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const motorcycle_entity_1 = require("../domain/motorcycle.entity");
const maintenance_entity_1 = require("../domain/maintenance.entity");
const incident_entity_1 = require("../domain/incident.entity");
const motorcycle_repository_1 = require("./motorcycle.repository");
const maintenance_repository_1 = require("./maintenance.repository");
const incident_repository_1 = require("./incident.repository");
const driver_service_1 = require("../application/driver.service");
const driver_controller_1 = require("../interface/driver.controller");
const driver_repository_1 = require("./driver.repository");
const driver_entity_1 = require("../domain/driver.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([motorcycle_entity_1.Motorcycle, maintenance_entity_1.Maintenance, incident_entity_1.Incident, driver_entity_1.Driver]),
        ],
        providers: [motorcycle_repository_1.MotorcycleRepository, maintenance_repository_1.MaintenanceRepository, incident_repository_1.IncidentRepository, driver_repository_1.DriverRepository, driver_service_1.DriverService],
        controllers: [driver_controller_1.DriverController],
        exports: [motorcycle_repository_1.MotorcycleRepository, maintenance_repository_1.MaintenanceRepository, incident_repository_1.IncidentRepository],
    })
], DatabaseModule);
