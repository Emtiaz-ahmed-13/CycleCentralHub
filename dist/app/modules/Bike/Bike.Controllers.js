"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikesControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../shared/catchAsync");
const sendResponse_1 = require("../../shared/sendResponse");
const Bike_Services_1 = require("./Bike.Services");
const CreateNewBike = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await Bike_Services_1.BikeServices.CreateBikeInDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Bike added  successfully",
        success: true,
        data: result,
    });
});
const GetAllBikes = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await Bike_Services_1.BikeServices.GetAllBikesFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Bikes fetched successfully",
        success: true,
        data: result,
    });
});
const GetSingleBike = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await Bike_Services_1.BikeServices.GetSingleBikeFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Bike fetched successfully",
        success: true,
        data: result,
    });
});
exports.BikesControllers = {
    CreateNewBike,
    GetAllBikes,
    GetSingleBike,
};
