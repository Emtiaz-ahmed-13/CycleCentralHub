"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, data) => {
    const { statusCode, success, message, data: responseData } = data;
    res.status(statusCode).json({
        success,
        message,
        data: responseData,
    });
};
exports.sendResponse = sendResponse;
