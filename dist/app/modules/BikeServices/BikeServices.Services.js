"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../middlewares/validateRequest");
const prisma_1 = require("../../shared/prisma");
const CreateServiceInDB = async (payload) => {
    console.log(payload);
    const isCustomerExists = await prisma_1.prisma.bike.findUnique({
        where: {
            bikeId: payload.bikeId,
        },
    });
    console.log(isCustomerExists);
    if (!isCustomerExists) {
        throw new validateRequest_1.ValitedError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Bike not found");
    }
    const result = await prisma_1.prisma.serviceRecord.create({
        data: {
            description: payload.description,
            serviceDate: payload.serviceDate,
            bike: {
                connect: {
                    bikeId: payload.bikeId,
                },
            },
        },
    });
    console.log(result);
    return result;
};
const GetAllServiceFromDB = async () => {
    const result = await prisma_1.prisma.serviceRecord.findMany();
    return result;
};
const GetPendingServicesFromDB = async () => {
    const sevenDaysBeforeDateFromToday = new Date();
    sevenDaysBeforeDateFromToday.setDate(sevenDaysBeforeDateFromToday.getDate() - 7);
    const result = await prisma_1.prisma.serviceRecord.findMany({
        where: {
            AND: [
                {
                    OR: [
                        {
                            status: {
                                in: ["pending", "in_progress"],
                            },
                        },
                    ],
                },
                {
                    serviceDate: {
                        lt: sevenDaysBeforeDateFromToday,
                    },
                },
            ],
        },
    });
    return result;
};
const GetSingleServiceFromDB = async (id) => {
    const result = await prisma_1.prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
};
const UpdateServiceRecord = async (id, status) => {
    console.log(status);
    const newStatus = status === "completed" ? "done" : status;
    const result = await prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            status: newStatus,
        },
    });
    return result;
};
exports.BikeServices = {
    CreateServiceInDB,
    GetAllServiceFromDB,
    GetSingleServiceFromDB,
    UpdateServiceRecord,
    GetPendingServicesFromDB,
};
