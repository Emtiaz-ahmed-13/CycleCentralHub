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
exports.CustomerServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const validateRequest_1 = require("../../middlewares/validateRequest");
const prisma_1 = require("../../shared/prisma");
const CreateCustomerInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const isCustomerAlreadyExists = yield prisma_1.prisma.customer.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (isCustomerAlreadyExists) {
        throw new validateRequest_1.ValitedError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Customer already exists");
    }
    const result = yield prisma_1.prisma.customer.create({
        data: payload,
    });
    console.log(result);
    return result;
});
const GetAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findMany();
    return result;
});
const GetSingleCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return result;
});
const UpdateCustomerFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
});
const DeleteCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    console.log(result);
    return result;
});
exports.CustomerServices = {
    CreateCustomerInDB,
    GetAllCustomersFromDB,
    GetSingleCustomerFromDB,
    UpdateCustomerFromDB,
    DeleteCustomerFromDB,
};
