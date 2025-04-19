import { Router } from "express";
import { CustomersControllers } from "./user.controller";

const router = Router();

router.post("/", CustomersControllers.CreateNewCustomer);
router.get("/", CustomersControllers.GetAllCustomers);
router.get("/:id", CustomersControllers.GetSingleCustomer);
router.put("/:id", CustomersControllers.UpdateCustomerInfo);
router.delete("/:id", CustomersControllers.DeleteCustomerInfo);

export const CustomerRoutes = router;
