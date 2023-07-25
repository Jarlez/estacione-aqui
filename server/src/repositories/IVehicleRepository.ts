import { Vehicle } from "@entites/vehicle";



export interface IVehicleRepository {
  create(data: Vehicle, customer_id: string): Promise<void>;
  findByPlate(plate: string): Promise<Vehicle | null>;
}