import { AppErrors } from "@errors/appErrors";
import { IVehicleRepository } from "@repositories/IVehicleRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class DeleteVehicleUseCase {
  constructor(
    @inject("VehicleRepository")
    private IVehicleRepository: IVehicleRepository 
  ) {}

  async execute(id: string): Promise<void> {
    const vehicleExist = await this.IVehicleRepository.findById(id);

    if (!vehicleExist) throw new AppErrors("Veículo não encontrado", 404);

    await this.IVehicleRepository.delete(id);
  }
}