import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVehicleUseCase } from "./updateVehicleUseCase";
import { z } from "zod";

export class UpdateVehicleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateVehicle = container.resolve(UpdateVehicleUseCase);
    const updateVehicleSchema = z.object({
      brand: z.string(),
      model: z.string(),
      plate: z.string(),
      color: z.string(),
    });
    const { id } = req.params;

    const vehicle = updateVehicleSchema.parse(req.body);

    updateVehicle.execute(vehicle, id);

    return res.status(204).send();
  }
}