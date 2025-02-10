// src/domain/maintenance.entity.ts
export class Maintenance {
    constructor(
        public id: string,
        public motorcycleId: string,
        public date: Date,
        public description: string,
        public cost: number,
    ) {}

    // Business rules
    shouldSendReminder(): boolean {
        // Example rule: if the maintenance cost is more than 500€
        return this.cost > 500;
    }
}
