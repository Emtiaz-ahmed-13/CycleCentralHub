"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// Apply CORS middleware globally
//parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Define route
app.get("/", (req, res) => {
    res.send({
        Message: "CycleCenterHub  server",
    });
});
app.use("/api/", routes_1.default);
app.use(globalErrorHandler_1.GlobalErrorHandler);
exports.default = app;
