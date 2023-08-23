import { IRegisterVehicle } from "@DTO/vehicle";
import { Vehicle } from "@entites/vehicle";
import { AppErrors } from "@errors/appErrors";
import { IVehicleRepository } from "@repositories/IVehicleRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class RegisterVehicleUseCase {
  constructor(
    @inject('VehicleRepository')
    private IVehicleRepository: IVehicleRepository
  ) {}

  async execute(data: IRegisterVehicle, customerId: string): Promise<void> {
    const vehicleAlreadyExist = await this.IVehicleRepository.findByPlate(data.plate);

    if (vehicleAlreadyExist) throw new AppErrors("Veículo já cadastrado", 400);

    const customerHasVehicle = await this.IVehicleRepository.findByCustomerId(customerId);

    if (customerHasVehicle) throw new AppErrors("Mensalista já possui veículo cadastrado", 422);

    const vehicle = new Vehicle(data);

    await this.IVehicleRepository.create(vehicle, customerId);
  }
}