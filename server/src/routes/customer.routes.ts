import { Router } from "express";

import { RegisterCustomerController } from "../modules/customer/useCases/registerCustomer/registerCustomerController";

export const customerRoutes = Router();

const registerCustomerController = new RegisterCustomerController();

customerRoutes.post("/create", registerCustomerController.handle);

