"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandler = void 0;
const GlobalErrorHandler = (err, req, res, next) => {
    console.error("Error caught by GlobalErrorHandler:", err);
    const statusCode = err?.statusCode || 500;
    const message = err?.message || "Something went wrong";
    const stack = err?.stack;
    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? stack : undefined,
    });
};
exports.GlobalErrorHandler = GlobalErrorHandler;
