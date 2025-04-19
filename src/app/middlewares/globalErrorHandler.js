"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandler = void 0;
const GlobalErrorHandler = (err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong", stack } = err;
    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? stack : undefined,
    });
};
exports.GlobalErrorHandler = GlobalErrorHandler;
