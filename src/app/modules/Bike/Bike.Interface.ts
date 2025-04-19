import { z } from "zod";

const createBikeSchema = z.object({
  brand: z.string({
    required_error: "Brand is required",
  }),
  model: z.string({
    required_error: "Model is required",
  }),
  year: z
    .number({
      required_error: "Year is required",
    })
    .int({
      message: "Year must be an integer",
    })
    .gte(1900, {
      message: "Year must be 1900 or later",
    })
    .lte(new Date().getFullYear(), {
      message: "Year can't be in the future",
    }),
  customerId: z.string({
    required_error: "Customer ID is required",
  }),
});

export type TCreateBike = z.infer<typeof createBikeSchema>;
export const BikeSchemas = {
  createBikeSchema,
};
