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
exports.MotorcycleRepository = void 0;
// src/infrastructure/motorcycle.repository.ts
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const motorcycle_entity_1 = require("../domain/motorcycle.entity");
let MotorcycleRepository = class MotorcycleRepository {
    constructor(motorcycleRepository) {
        this.motorcycleRepository = motorcycleRepository;
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const motorcycle = yield this.motorcycleRepository.findOneBy({ id });
            if (!motorcycle) {
                throw new Error(`Motorcycle with id ${id} not found`);
            }
            return motorcycle;
        });
    }
    create(motorcycle) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.motorcycleRepository.save(motorcycle);
        });
    }
    update(id, motorcycle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.motorcycleRepository.update(id, motorcycle);
            return this.findOne(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.motorcycleRepository.delete(id);
        });
    }
    save(motorcycle) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.motorcycleRepository.save(motorcycle);
        });
    }
};
exports.MotorcycleRepository = MotorcycleRepository;
exports.MotorcycleRepository = MotorcycleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(motorcycle_entity_1.Motorcycle)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MotorcycleRepository);
