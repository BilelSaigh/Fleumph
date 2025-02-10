"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparePart = void 0;
// src/domain/spare-part.entity.ts
class SparePart {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    // Business rules
    isAvailable() {
        return this.stock > 0;
    }
    adjustStock(quantity) {
        this.stock -= quantity;
    }
}
exports.SparePart = SparePart;
