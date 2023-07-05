import { Router } from "express";
import { customerRoutes } from "./customer.routes";

export const routes = Router();

routes.use("/customer", customerRoutes);

