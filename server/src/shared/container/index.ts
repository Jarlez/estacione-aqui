import { container } from "tsyringe"

import { ICustomerRepository } from "@repositories/ICustomerRepository"
import { PrismaCustomerRepository } from "@repositories/implementations/prismaCustomerRepository"

container.registerSingleton<ICustomerRepository>("CustomerRepository", PrismaCustomerRepository);