import { Router } from "express";

import { RegisterVehicleController } from "@useCases/vehicle/registerVehicle/registerVehicleController";
import { DeleteVehicleController } from "@useCases/vehicle/deleteVehicle/deleteVehicleController";
import { UpdateVehicleController } from "@useCases/vehicle/updateVehicle/updateVehicleController";

export const vehicleRoutes = Router();

const registerVehicleController = new RegisterVehicleController();
const deleteVehicleController = new DeleteVehicleController();
const updateVehicleController = new UpdateVehicleController();

vehicleRoutes.post("/create", registerVehicleController.handle);
vehicleRoutes.delete("/:id", deleteVehicleController.handle);
vehicleRoutes.put("/update/:id", updateVehicleController.handle);
