"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incident = void 0;
// src/domain/incident.entity.ts
class Incident {
    constructor(id, motorcycleId, date, description, type, repaired) {
        this.id = id;
        this.motorcycleId = motorcycleId;
        this.date = date;
        this.description = description;
        this.type = type;
        this.repaired = repaired;
    }
    // Business rules
    needsRepair() {
        return this.type === 'accident' && !this.repaired;
    }
}
exports.Incident = Incident;
