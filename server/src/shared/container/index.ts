import { container } from "tsyringe"

import { ICustomerRepository } from "@repositories/ICustomerRepository"
import { PrismaCustomerRepository } from "@repositories/implementations/prismaCustomerRepository"
import { IVehicleRepository } from "@repositories/IVehicleRepository";
import { PrismaVehicleRepository } from "@repositories/implementations/prismaVehicleRepository";

container.registerSingleton<ICustomerRepository>("CustomerRepository", PrismaCustomerRepository);
container.registerSingleton<IVehicleRepository>("VehicleRepository", PrismaVehicleRepository);