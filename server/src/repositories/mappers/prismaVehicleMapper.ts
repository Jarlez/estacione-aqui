import { Vehicle } from "@entites/vehicle";
import { Vehicle as rawVehicle } from "@prisma/client"


export class PrismaVehicleMapper {
  static toPrisma(vehicle: Vehicle) {
    return {
      id: vehicle.id,
      brand: vehicle.brand,
      model: vehicle.model,
      plate: vehicle.plate,
      color: vehicle.color,
      created_at: vehicle.created_at,
      updated_at: vehicle.updated_at,
    };
  }

  static toDomain(raw: rawVehicle | null) {
    if(!raw) {
      return null
    }

    return new Vehicle({
      brand: raw.brand,
      model: raw.model,
      plate: raw.plate,
      color: raw.color,
      created_at: raw.created_at,
      updated_at: raw.updated_at,
    }, 
    
    raw.id)
  }
}