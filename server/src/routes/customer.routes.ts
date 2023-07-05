import { Router } from "express";

import { RegisterCustomerController } from "../modules/customer/useCases/registerCustomer/registerCustomerController";
import { DeleteCustomerController } from "modules/customer/useCases/softDeleteCustomer/deleteCustomerController";
import { UndeleteCustomerController } from "modules/customer/useCases/undeleteCustomer/undeleteCustomerController";
import { ListCustomersController } from "modules/customer/useCases/listCustomers/listCustomersController";

export const customerRoutes = Router();

const registerCustomerController = new RegisterCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const undelete = new UndeleteCustomerController();
const listCustomersController = new ListCustomersController();

customerRoutes.post("/create", registerCustomerController.handle);
customerRoutes.delete("/delete/:id", deleteCustomerController.handle);
customerRoutes.patch("/undelete/:id", undelete.handle);
customerRoutes.get("/", listCustomersController.handle);



