"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maintenance = void 0;
// src/domain/maintenance.entity.ts
class Maintenance {
    constructor(id, motorcycleId, date, description, cost) {
        this.id = id;
        this.motorcycleId = motorcycleId;
        this.date = date;
        this.description = description;
        this.cost = cost;
    }
    // Business rules
    shouldSendReminder() {
        // Example rule: if the maintenance cost is more than 500€
        return this.cost > 500;
    }
}
exports.Maintenance = Maintenance;
