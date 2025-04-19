import { Router } from "express";
import { BikesControllers } from "./Bike.Controllers";

const router = Router();

router.post("/", BikesControllers.CreateNewBike);
router.get("/", BikesControllers.GetAllBikes);
router.get("/:id", BikesControllers.GetSingleBike);

export const BikeRoutes = router;
