import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { DeleteVehicleUseCase } from "./deleteVehicleUseCase";



export class DeleteVehicleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const deleteVehicle = container.resolve(DeleteVehicleUseCase);

    const { id } = req.params

    await deleteVehicle.execute(id)

    return res.status(204).send();
  }
}