// src/domain/motorcycle.entity.ts
export class Motorcycle {
    constructor(
        public id: string,
        public brand: string,
        public model: string,
        public year: number,
        public mileage: number,
        public status: 'available' | 'in maintenance' | 'sold',
        public driverId: string | null, // Driver ID if the motorcycle is assigned
    ) {}

    // Business rules
    needsMaintenance(): boolean {
        return this.mileage > 10000; // Simple example
    }
}
