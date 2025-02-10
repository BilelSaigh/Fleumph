"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = void 0;
// src/domain/motorcycle.entity.ts
class Motorcycle {
    constructor(id, brand, model, year, mileage, status, driverId) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.status = status;
        this.driverId = driverId;
    }
    // Business rules
    needsMaintenance() {
        return this.mileage > 10000; // Simple example
    }
}
exports.Motorcycle = Motorcycle;
