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
exports.DriverService = void 0;
// src/application/driver.service.ts
const common_1 = require("@nestjs/common");
const driver_repository_1 = require("../infrastructure/driver.repository");
let DriverService = class DriverService {
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    // Récupérer tous les conducteurs
    getAllDrivers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverRepository.findAll();
        });
    }
    // Récupérer un conducteur par ID
    getDriverById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverRepository.findOne(id);
        });
    }
    // Créer un nouveau conducteur
    createDriver(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverRepository.create(driver);
        });
    }
    // Mettre à jour un conducteur
    updateDriver(id, driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverRepository.update(id, driver);
        });
    }
    // Supprimer un conducteur
    deleteDriver(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverRepository.delete(id);
        });
    }
};
exports.DriverService = DriverService;
exports.DriverService = DriverService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [driver_repository_1.DriverRepository])
], DriverService);
