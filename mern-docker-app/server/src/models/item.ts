import mongoose, { Document, Schema } from 'mongoose';

export interface Item extends Document {
    name: string;
    description: string;
    price: number;
}

const itemSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});

export const ItemModel = mongoose.model<Item>('Item', itemSchema);