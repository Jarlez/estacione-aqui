import { Vehicle } from "@entites/vehicle";



export interface IVehicleRepository {
  create(data: Vehicle, customerId: string): Promise<void>;
  findByPlate(plate: string): Promise<Vehicle | null>;
  findById(id: string): Promise<Vehicle | null>;
  findByCustomerId(customerId: string): Promise<Vehicle | null>;
  delete(id: string): Promise<void>;
  update(data: Vehicle, vehicleId: string): Promise<void>;
}