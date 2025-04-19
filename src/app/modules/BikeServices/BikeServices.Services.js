"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../middlewares/validateRequest");
const prisma_1 = require("../../shared/prisma");
const CreateServiceInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const isCustomerExists = yield prisma_1.prisma.bike.findUnique({
        where: {
            bikeId: payload.bikeId,
        },
    });
    console.log(isCustomerExists);
    if (!isCustomerExists) {
        throw new validateRequest_1.ValitedError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Bike not found");
    }
    const result = yield prisma_1.prisma.serviceRecord.create({
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
});
const GetAllServiceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findMany();
    return result;
});
const GetPendingServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysBeforeDateFromToday = new Date();
    sevenDaysBeforeDateFromToday.setDate(sevenDaysBeforeDateFromToday.getDate() - 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
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
});
const GetSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const UpdateServiceRecord = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(status);
    const newStatus = status === "completed" ? "done" : status;
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            status: newStatus,
        },
    });
    return result;
});
exports.BikeServices = {
    CreateServiceInDB,
    GetAllServiceFromDB,
    GetSingleServiceFromDB,
    UpdateServiceRecord,
    GetPendingServicesFromDB,
};
