"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../middlewares/validateRequest");
const prisma_1 = require("../../shared/prisma");
const CreateCustomerInDB = async (payload) => {
    console.log(payload);
    const isCustomerAlreadyExists = await prisma_1.prisma.customer.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (isCustomerAlreadyExists) {
        throw new validateRequest_1.ValitedError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Customer already exists");
    }
    const result = await prisma_1.prisma.customer.create({
        data: payload,
    });
    console.log(result);
    return result;
};
const GetAllCustomersFromDB = async () => {
    const result = await prisma_1.prisma.customer.findMany();
    return result;
};
const GetSingleCustomerFromDB = async (id) => {
    const result = await prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return result;
};
const UpdateCustomerFromDB = async (id, payload) => {
    const result = await prisma_1.prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
};
const DeleteCustomerFromDB = async (id) => {
    const result = await prisma_1.prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    console.log(result);
    return result;
};
exports.CustomerServices = {
    CreateCustomerInDB,
    GetAllCustomersFromDB,
    GetSingleCustomerFromDB,
    UpdateCustomerFromDB,
    DeleteCustomerFromDB,
};
