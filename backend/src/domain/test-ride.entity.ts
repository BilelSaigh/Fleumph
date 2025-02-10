// src/domain/test-ride.entity.ts
export class TestRide {
    constructor(
        public id: string,
        public motorcycleId: string,
        public driverId: string,
        public date: Date,
        public satisfactionScore: number, // On a scale from 1 to 5
    ) {}

    // Business rules
    isSatisfied(): boolean {
        return this.satisfactionScore >= 4;
    }
}
