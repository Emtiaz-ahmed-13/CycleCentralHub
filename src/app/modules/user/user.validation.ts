import { z } from "zod";

const createCustomer = z.object({
  name: z.string({
    required_error: "Name is required!",
  }),
  email: z
    .string({
      required_error: "Email is required!",
    })
    .email("Invalid email format"),
  phone: z.string({
    required_error: "Contact Number is required!",
  }),
});

export const userValidation = {
  createCustomer,
};
