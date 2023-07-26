import { Router } from "express";

import { RegisterVehicleController } from "@useCases/vehicle/registerVehicle/registerVehicleController";
import { DeleteVehicleController } from "@useCases/vehicle/deleteVehicle/deleteVehicleController";

export const vehicleRoutes = Router();

const registerVehicleController = new RegisterVehicleController()
const deleteVehicleController = new DeleteVehicleController();

vehicleRoutes.post("/create", registerVehicleController.handle);
vehicleRoutes.delete("/:id", deleteVehicleController.handle);

