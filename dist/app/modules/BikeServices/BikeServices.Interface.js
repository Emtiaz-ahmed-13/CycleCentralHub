"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordSchemas = void 0;
const zod_1 = require("zod");
const createServiceRecordSchema = zod_1.z.object({
    bikeId: zod_1.z.string({
        required_error: "Bike ID is required",
    }),
    serviceDate: zod_1.z
        .string({
        required_error: "Service date is required",
    })
        .datetime({
        message: "Invalid date format for serviceDate",
    }),
    completionDate: zod_1.z
        .string()
        .datetime({
        message: "Invalid date format for completionDate",
    })
        .optional()
        .nullable(),
    description: zod_1.z.string({
        required_error: "Description is required",
    }),
    status: zod_1.z.enum(["pending", "in-progress", "done"], {
        required_error: "Status is required",
        invalid_type_error: "Status must be one of 'pending', 'in-progress', or 'done'",
    }),
});
exports.ServiceRecordSchemas = {
    createServiceRecordSchema,
};
