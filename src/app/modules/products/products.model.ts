import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productScheme = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
    ratings: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

export const productCollection = model<TProduct>('Product', productScheme);
