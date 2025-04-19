"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchemas = void 0;
const zod_1 = require("zod");
const createCustomerSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email({
        message: "Invalid email address",
    }),
    phone: zod_1.z
        .string({
        required_error: "Phone number is required",
    })
        .min(10, {
        message: "Phone number must be at least 10 characters",
    }),
});
exports.CustomerSchemas = {
    createCustomerSchema,
};
