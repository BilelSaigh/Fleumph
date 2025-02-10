"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMaintenanceService = void 0;
// src/application/schedule-maintenance.service.ts
const common_1 = require("@nestjs/common");
const motorcycle_repository_1 = require("../infrastructure/motorcycle.repository");
const maintenance_repository_1 = require("../infrastructure/maintenance.repository");
const maintenance_entity_1 = require("../domain/maintenance.entity");
let ScheduleMaintenanceService = class ScheduleMaintenanceService {
    constructor(motorcycleRepository, maintenanceRepository) {
        this.motorcycleRepository = motorcycleRepository;
        this.maintenanceRepository = maintenanceRepository;
    }
    execute(motorcycleId, description, cost) {
        return __awaiter(this, void 0, void 0, function* () {
            // Retrieve the motorcycle to schedule maintenance for
            const motorcycle = yield this.motorcycleRepository.findOne(motorcycleId);
            // Check if the motorcycle exists and needs maintenance
            if (!motorcycle) {
                throw new Error('Motorcycle not found');
            }
            if (!motorcycle.needsMaintenance()) {
                throw new Error('Motorcycle does not need maintenance');
            }
            // Create and save the maintenance record
            const maintenance = new maintenance_entity_1.Maintenance(this.generateId(), motorcycleId, new Date(), description, cost);
            return yield this.maintenanceRepository.save(maintenance);
        });
    }
    generateId() {
        // Generate a unique ID (in reality, you could use something like UUID)
        return Math.random().toString(36).substr(2, 9);
    }
};
exports.ScheduleMaintenanceService = ScheduleMaintenanceService;
exports.ScheduleMaintenanceService = ScheduleMaintenanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [motorcycle_repository_1.MotorcycleRepository,
        maintenance_repository_1.MaintenanceRepository])
], ScheduleMaintenanceService);
