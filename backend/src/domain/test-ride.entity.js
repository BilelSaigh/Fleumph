"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRide = void 0;
// src/domain/test-ride.entity.ts
class TestRide {
    constructor(id, motorcycleId, driverId, date, satisfactionScore) {
        this.id = id;
        this.motorcycleId = motorcycleId;
        this.driverId = driverId;
        this.date = date;
        this.satisfactionScore = satisfactionScore;
    }
    // Business rules
    isSatisfied() {
        return this.satisfactionScore >= 4;
    }
}
exports.TestRide = TestRide;
