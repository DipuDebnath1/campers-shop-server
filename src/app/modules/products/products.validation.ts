import { z } from 'zod';

const productCreateValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Product name is required."),
    price: z.number().nonnegative("Price must be a non-negative number."),
    stockQuantity: z.number().int().nonnegative("Stock quantity must be a non-negative integer."),
    description: z.string(),
    category: z.string().min(1, "Category is required."),
    img: z.string().min(1, "img is required."),
    ratings: z.number().min(0).max(5).default(0),
  }),
});

const productUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Product name is required.").optional(),
    price: z.number().nonnegative("Price must be a non-negative number.").optional(),
    stockQuantity: z.number().int().nonnegative("Stock quantity must be a non-negative integer.").optional(),
    description: z.string().optional().optional(),
    category: z.string().min(1, "Category is required.").optional(),
    img: z.string().min(1, "img is required.").optional(),
    ratings: z.number().min(0).max(5).default(0).optional(),
  }),
});

export default {
  productCreateValidationSchema,
  productUpdateValidationSchema,
};
