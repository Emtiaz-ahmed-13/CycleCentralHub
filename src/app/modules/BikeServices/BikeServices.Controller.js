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
exports.BikesControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../shared/catchAsync");
const sendResponse_1 = require("../../shared/sendResponse");
const BikeServices_Services_1 = require("./BikeServices.Services");
const CreateNewService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield BikeServices_Services_1.BikeServices.CreateServiceInDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service record created successfully",
        success: true,
        data: result,
    });
}));
const GetAllServices = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield BikeServices_Services_1.BikeServices.GetAllServiceFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service records fetched successfully",
        success: true,
        data: result,
    });
}));
const GetPendingServices = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hitting");
    const result = yield BikeServices_Services_1.BikeServices.GetPendingServicesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Overdue or pending services fetched successfully",
        success: true,
        data: result,
    });
}));
const GetSingleService = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield BikeServices_Services_1.BikeServices.GetSingleServiceFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service record fetched successfully",
        success: true,
        data: result,
    });
}));
const UpdateServiceRecord = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, status } = req.params;
    const result = yield BikeServices_Services_1.BikeServices.UpdateServiceRecord(id, status);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service marked as completed",
        success: true,
        data: result,
    });
}));
exports.BikesControllers = {
    CreateNewService,
    GetAllServices,
    GetPendingServices,
    GetSingleService,
    UpdateServiceRecord,
};
