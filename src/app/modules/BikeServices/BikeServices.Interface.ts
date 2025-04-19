import { z } from "zod";

const createServiceRecordSchema = z.object({
  bikeId: z.string({
    required_error: "Bike ID is required",
  }),
  serviceDate: z
    .string({
      required_error: "Service date is required",
    })
    .datetime({
      message: "Invalid date format for serviceDate",
    }),
  completionDate: z
    .string()
    .datetime({
      message: "Invalid date format for completionDate",
    })
    .optional()
    .nullable(),
  description: z.string({
    required_error: "Description is required",
  }),
  status: z.enum(["pending", "in-progress", "done"], {
    required_error: "Status is required",
    invalid_type_error:
      "Status must be one of 'pending', 'in-progress', or 'done'",
  }),
});

export type TCreateServiceRecord = z.infer<typeof createServiceRecordSchema>;

export const ServiceRecordSchemas = {
  createServiceRecordSchema,
};
