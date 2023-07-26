import { Vehicle } from "@entites/vehicle";
import { prisma } from "@lib/prisma";
import { IVehicleRepository } from "@repositories/IVehicleRepository";
import { PrismaVehicleMapper } from "@repositories/mappers/prismaVehicleMapper";

export class PrismaVehicleRepository implements IVehicleRepository {
  async findByCustomerId(customer_id: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findFirst({
      where: {
        customer_id
      }
    });

    return vehicle ? PrismaVehicleMapper.toDomain(vehicle) : null
  }
  
  async findById(id: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findFirst({
      where: {
        id
      }
    });

    return vehicle ? PrismaVehicleMapper.toDomain(vehicle) : null
  }

  async delete(id: string): Promise<void> {
    await prisma.vehicle.delete({
      where: {
        id
      }
    });
  }

  async findByPlate(plate: string): Promise<Vehicle | null> {
    const vehicle = await prisma.vehicle.findFirst({
      where: {
        plate
      },
    });
    
    return vehicle ? PrismaVehicleMapper.toDomain(vehicle) : null
  }

  async create(data: Vehicle, customer_id: string): Promise<void> {
    const raw = PrismaVehicleMapper.toPrisma(data);
    
    await prisma.vehicle.create({
      data: {
        brand: raw.brand,
        model: raw.model,
        plate: raw.plate,
        color: raw.color,
        created_at: raw.created_at,
        updated_at: raw.updated_at,
        customer_id
      }
    });
  }
}