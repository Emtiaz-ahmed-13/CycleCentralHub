"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Bike_Routes_1 = require("../modules/Bike/Bike.Routes");
const BikeServices_Routes_1 = require("../modules/BikeServices/BikeServices.Routes");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const modelRoutes = [
    {
        path: "/customers",
        route: user_routes_1.CustomerRoutes,
    },
    {
        path: "/bikes",
        route: Bike_Routes_1.BikeRoutes,
    },
    {
        path: "/services",
        route: BikeServices_Routes_1.ServiceRoutes,
    },
];
modelRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
