import { Router } from "express";
import { customerRoutes } from "./customer.routes";
import { vehicleRoutes } from "./vehicle.routes";

export const routes = Router();

routes.use("/customer", customerRoutes);
routes.use("/vehicle", vehicleRoutes);

