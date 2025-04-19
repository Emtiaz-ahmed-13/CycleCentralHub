"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../middlewares/validateRequest");
const prisma_1 = require("../../shared/prisma");
const CreateBikeInDB = async (payload) => {
    console.log(payload);
    const isCustomerExists = await prisma_1.prisma.customer.findUnique({
        where: {
            customerId: payload.customerId,
        },
    });
    console.log(isCustomerExists);
    if (!isCustomerExists) {
        throw new validateRequest_1.ValitedError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Customer not found");
    }
    const result = await prisma_1.prisma.bike.create({
        data: {
            brand: payload.brand,
            model: payload.model,
            year: payload.year,
            customer: {
                connect: {
                    customerId: payload.customerId,
                },
            },
        },
    });
    console.log(result);
    return result;
};
const GetAllBikesFromDB = async () => {
    const result = await prisma_1.prisma.bike.findMany();
    return result;
};
const GetSingleBikeFromDB = async (id) => {
    const result = await prisma_1.prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    return result;
};
exports.BikeServices = {
    CreateBikeInDB,
    GetAllBikesFromDB,
    GetSingleBikeFromDB,
};
