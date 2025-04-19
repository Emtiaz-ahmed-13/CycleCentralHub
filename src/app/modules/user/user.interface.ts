import { z } from "zod";

const createCustomerSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  phone: z
    .string({
      required_error: "Phone number is required",
    })
    .min(10, {
      message: "Phone number must be at least 10 characters",
    }),
});

export type TCreateCustomer = z.infer<typeof createCustomerSchema>;
export const CustomerSchemas = {
  createCustomerSchema,
};
