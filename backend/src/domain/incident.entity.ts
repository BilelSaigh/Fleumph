// src/domain/incident.entity.ts
export class Incident {
    constructor(
        public id: string,
        public motorcycleId: string,
        public date: Date,
        public description: string,
        public type: 'accident' | 'breakdown',
        public repaired: boolean,
    ) {}

    // Business rules
    needsRepair(): boolean {
        return this.type === 'accident' && !this.repaired;
    }
}
