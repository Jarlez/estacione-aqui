import { Router } from "express";

import { RegisterCustomerController } from "@useCases/customer/registerCustomer/registerCustomerController";
import { DeleteCustomerController } from "@useCases/customer/softDeleteCustomer/deleteCustomerController";
import { UndeleteCustomerController } from "@useCases/customer/undeleteCustomer/undeleteCustomerController";
import { ListCustomersController } from "@useCases/customer/listCustomers/listCustomersController";
import { UpdateCustomerController } from "@useCases/customer/updateCustomer/updateCustomerController";
import { ListCustomerDeletedController } from "@useCases/customer/listCustomDelete/listCustomerDeletedController";

export const customerRoutes = Router();

const registerCustomerController = new RegisterCustomerController();
const deleteCustomerController = new DeleteCustomerController();
const undelete = new UndeleteCustomerController();
const listCustomersController = new ListCustomersController();
const updateCustomerController = new UpdateCustomerController();
const listCustomersDeletedController = new ListCustomerDeletedController();

customerRoutes.post("/create", registerCustomerController.handle);
customerRoutes.delete("/delete/:id", deleteCustomerController.handle);
customerRoutes.patch("/undelete/:id", undelete.handle);
customerRoutes.get("/", listCustomersController.handle);
customerRoutes.put("/update/:id", updateCustomerController.handle);
customerRoutes.get("/deleted/", listCustomersDeletedController.handle);




