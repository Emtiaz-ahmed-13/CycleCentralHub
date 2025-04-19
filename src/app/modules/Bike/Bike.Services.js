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
const CreateBikeInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const isCustomerExists = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: payload.customerId,
        },
    });
    console.log(isCustomerExists);
    if (!isCustomerExists) {
        throw new validateRequest_1.ValitedError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Customer not found");
    }
    const result = yield prisma_1.prisma.bike.create({
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
});
const GetAllBikesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findMany();
    return result;
});
const GetSingleBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    return result;
});
exports.BikeServices = {
    CreateBikeInDB,
    GetAllBikesFromDB,
    GetSingleBikeFromDB,
};
