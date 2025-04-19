import { Router } from "express";
import { BikesControllers } from "./BikeServices.Controller";

const router = Router();

router.post("/", BikesControllers.CreateNewService);
router.get("/", BikesControllers.GetAllServices);
router.get("/status", BikesControllers.GetPendingServices);
router.get("/:id", BikesControllers.GetSingleService);
router.put("/:id/:status", BikesControllers.UpdateServiceRecord);

export const ServiceRoutes = router;
