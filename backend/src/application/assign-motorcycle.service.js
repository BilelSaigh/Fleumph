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
exports.AssignMotorcycleService = void 0;
// src/application/assign-motorcycle.service.ts
const common_1 = require("@nestjs/common");
const motorcycle_repository_1 = require("../infrastructure/motorcycle.repository");
const driver_repository_1 = require("../infrastructure/driver.repository");
let AssignMotorcycleService = class AssignMotorcycleService {
    constructor(motorcycleRepository, driverRepository) {
        this.motorcycleRepository = motorcycleRepository;
        this.driverRepository = driverRepository;
    }
    execute(motorcycleId, driverId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Retrieve the motorcycle and driver
            const motorcycle = yield this.motorcycleRepository.findOne(motorcycleId);
            const driver = yield this.driverRepository.findOne(driverId);
            // Check if motorcycle and driver exist
            if (!motorcycle) {
                throw new Error('Motorcycle not found');
            }
            if (!driver) {
                throw new Error('Driver not found');
            }
            // Assign the driver to the motorcycle
            motorcycle.driverId = driverId;
            return yield this.motorcycleRepository.save(motorcycle);
        });
    }
};
exports.AssignMotorcycleService = AssignMotorcycleService;
exports.AssignMotorcycleService = AssignMotorcycleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [motorcycle_repository_1.MotorcycleRepository,
        driver_repository_1.DriverRepository])
], AssignMotorcycleService);
