"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
// src/domain/driver.entity.ts
class Driver {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    // Business rules
    isEligibleForTestRide() {
        // Example: a driver must be over 18 years old
        return true; // Just a simple example, you can add real criteria
    }
}
exports.Driver = Driver;
