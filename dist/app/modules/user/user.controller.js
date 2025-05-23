"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../shared/catchAsync");
const sendResponse_1 = require("../../shared/sendResponse");
const user_service_1 = require("./user.service");
const CreateNewCustomer = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await user_service_1.CustomerServices.CreateCustomerInDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "Customer created successfully",
        success: true,
        data: result,
    });
});
const GetAllCustomers = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await user_service_1.CustomerServices.GetAllCustomersFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Customers fetched successfully",
        success: true,
        data: result,
    });
});
const GetSingleCustomer = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await user_service_1.CustomerServices.GetSingleCustomerFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Customer fetched successfully",
        success: true,
        data: result,
    });
});
const UpdateCustomerInfo = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await user_service_1.CustomerServices.UpdateCustomerFromDB(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Customer updated successfully",
        success: true,
        data: result,
    });
});
const DeleteCustomerInfo = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await user_service_1.CustomerServices.DeleteCustomerFromDB(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Customer deleted successfull",
        success: true,
    });
});
exports.CustomersControllers = {
    CreateNewCustomer,
    GetAllCustomers,
    GetSingleCustomer,
    UpdateCustomerInfo,
    DeleteCustomerInfo,
};
