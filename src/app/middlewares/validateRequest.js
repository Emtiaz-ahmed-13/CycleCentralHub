"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValitedError = void 0;
class ValitedError extends Error {
    constructor(stusCode, message, stack = "") {
        super(message);
        this.statusCode = stusCode;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.ValitedError = ValitedError;
