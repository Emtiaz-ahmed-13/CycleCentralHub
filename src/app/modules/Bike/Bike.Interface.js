"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeSchemas = void 0;
const zod_1 = require("zod");
const createBikeSchema = zod_1.z.object({
    brand: zod_1.z.string({
        required_error: "Brand is required",
    }),
    model: zod_1.z.string({
        required_error: "Model is required",
    }),
    year: zod_1.z
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
    customerId: zod_1.z.string({
        required_error: "Customer ID is required",
    }),
});
exports.BikeSchemas = {
    createBikeSchema,
};
