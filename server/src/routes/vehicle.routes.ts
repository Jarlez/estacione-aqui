import { Router } from "express";

import { RegisterVehicleController } from "@useCases/vehicle/registerVehicle/registerVehicleController";

export const vehicleRoutes = Router();

const registerVehicleController = new RegisterVehicleController()

vehicleRoutes.post("/create", registerVehicleController.handle);

