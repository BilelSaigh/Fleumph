// src/domain/spare-part.entity.ts
export class SparePart {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public stock: number,
    ) {}

    // Business rules
    isAvailable(): boolean {
        return this.stock > 0;
    }

    adjustStock(quantity: number): void {
        this.stock -= quantity;
    }
}
