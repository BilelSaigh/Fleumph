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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMaintenanceController = void 0;
// src/interface/schedule-maintenance.controller.ts
const common_1 = require("@nestjs/common");
const schedule_maintenance_service_1 = require("../application/schedule-maintenance.service");
const swagger_1 = require("@nestjs/swagger");
let ScheduleMaintenanceController = class ScheduleMaintenanceController {
    constructor(scheduleMaintenanceService) {
        this.scheduleMaintenanceService = scheduleMaintenanceService;
    }
    schedule(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { motorcycleId, description, cost } = body;
            return yield this.scheduleMaintenanceService.execute(motorcycleId, description, cost);
        });
    }
};
exports.ScheduleMaintenanceController = ScheduleMaintenanceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Schedule maintenance for a motorcycle' }) // Describes the operation
    ,
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The maintenance has been scheduled.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ScheduleMaintenanceController.prototype, "schedule", null);
exports.ScheduleMaintenanceController = ScheduleMaintenanceController = __decorate([
    (0, swagger_1.ApiTags)('maintenance') // Tag for Swagger documentation
    ,
    (0, common_1.Controller)('maintenance'),
    __metadata("design:paramtypes", [schedule_maintenance_service_1.ScheduleMaintenanceService])
], ScheduleMaintenanceController);
