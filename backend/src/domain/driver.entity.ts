// src/domain/driver.entity.ts
export class Driver {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public phone: string,
    ) {}

    // Business rules
    isEligibleForTestRide(): boolean {
        // Example: a driver must be over 18 years old
        return true; // Just a simple example, you can add real criteria
    }
}
