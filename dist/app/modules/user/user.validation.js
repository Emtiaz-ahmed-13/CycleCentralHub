"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const createCustomer = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required!",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required!",
    })
        .email("Invalid email format"),
    phone: zod_1.z.string({
        required_error: "Contact Number is required!",
    }),
});
exports.userValidation = {
    createCustomer,
};
