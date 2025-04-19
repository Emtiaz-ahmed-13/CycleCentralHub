"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikesControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../shared/catchAsync");
const sendResponse_1 = require("../../shared/sendResponse");
const BikeServices_Services_1 = require("./BikeServices.Services");
const CreateNewService = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await BikeServices_Services_1.BikeServices.CreateServiceInDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service record created successfully",
        success: true,
        data: result,
    });
});
const GetAllServices = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await BikeServices_Services_1.BikeServices.GetAllServiceFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service records fetched successfully",
        success: true,
        data: result,
    });
});
const GetPendingServices = (0, catchAsync_1.catchAsync)(async (req, res) => {
    console.log("hitting");
    const result = await BikeServices_Services_1.BikeServices.GetPendingServicesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Overdue or pending services fetched successfully",
        success: true,
        data: result,
    });
});
const GetSingleService = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await BikeServices_Services_1.BikeServices.GetSingleServiceFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service record fetched successfully",
        success: true,
        data: result,
    });
});
const UpdateServiceRecord = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id, status } = req.params;
    const result = await BikeServices_Services_1.BikeServices.UpdateServiceRecord(id, status);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Service marked as completed",
        success: true,
        data: result,
    });
});
exports.BikesControllers = {
    CreateNewService,
    GetAllServices,
    GetPendingServices,
    GetSingleService,
    UpdateServiceRecord,
};
