import express from "express";
import { BikeRoutes } from "../modules/Bike/Bike.Routes";
import { ServiceRoutes } from "../modules/BikeServices/BikeServices.Routes";
import { CustomerRoutes } from "../modules/user/user.routes";

const router = express.Router();

const modelRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
  {
    path: "/bikes",
    route: BikeRoutes,
  },
  {
    path: "/services",
    route: ServiceRoutes,
  },
];
modelRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
