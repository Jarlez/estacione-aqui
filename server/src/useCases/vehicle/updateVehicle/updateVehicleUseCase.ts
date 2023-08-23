import { IUpdatevehicle } from "@DTO/vehicle";
import { Vehicle } from "@entites/vehicle";
import { AppErrors } from "@errors/appErrors";
import { IVehicleRepository } from "@repositories/IVehicleRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateVehicleUseCase {
  constructor(
    @inject("VehicleRepository")
    private IVehicleRepository: IVehicleRepository
  ) {}

  async execute(data: IUpdatevehicle, vehicleId: string): Promise<void> {
    const vehicleExist = await this.IVehicleRepository.findById(vehicleId);
    console.log(vehicleExist)

    if (!vehicleExist) {
      throw new AppErrors("Veículo não encontrado", 404);
    }

    const vehicle = new Vehicle(data);

    await this.IVehicleRepository.update(vehicle, vehicleId);
  }
}