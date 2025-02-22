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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverController = void 0;
// src/interface/driver.controller.ts
const common_1 = require("@nestjs/common");
const driver_service_1 = require("../application/driver.service");
const driver_entity_1 = require("../domain/driver.entity");
let DriverController = class DriverController {
    constructor(driverService) {
        this.driverService = driverService;
    }
    getAllDrivers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverService.getAllDrivers();
        });
    }
    getDriverById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverService.getDriverById(id);
        });
    }
    createDriver(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverService.createDriver(driver);
        });
    }
    updateDriver(id, driver) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverService.updateDriver(id, driver);
        });
    }
    deleteDriver(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.driverService.deleteDriver(id);
        });
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], DriverController.prototype, "getAllDrivers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], DriverController.prototype, "getDriverById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [driver_entity_1.Driver]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DriverController.prototype, "createDriver", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, driver_entity_1.Driver]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], DriverController.prototype, "updateDriver", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], DriverController.prototype, "deleteDriver", null);
exports.DriverController = DriverController = __decorate([
    (0, common_1.Controller)('drivers'),
    __metadata("design:paramtypes", [driver_service_1.DriverService])
], DriverController);
