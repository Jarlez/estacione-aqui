import { Customer } from "@entites/customer";
import { prisma } from "@lib/prisma";
import { ICustomerRepository } from "@repositories/ICustomerRepository"
import { PrismaCustomerMapper } from "@repositories/mappers/prismaCustomerMapper";


export class PrismaCustomerRepository implements ICustomerRepository {
  async findByCPF(cpf: string): Promise<Customer | null> {
    const customer = await prisma.customer.findFirst({
      where: {
        cpf
      }
    });

    return customer ? PrismaCustomerMapper.toDomain(customer) : null
  }

  async findById(id: string): Promise<Customer | null> {
    const customer = await prisma.customer.findFirst({
      where: {
        id
      }
    });

    return customer ? PrismaCustomerMapper.toDomain(customer) : null
  }

  async save(data: Customer): Promise<void> {
    const raw = PrismaCustomerMapper.toPrisma(data);
    
    await prisma.customer.create({
      data: {
        name: raw.name,
        cpf: raw.cpf,
        contact_number: raw.contact_number,
        working_store: raw.working_store,
        created_at: raw.created_at,
        updated_at: raw.updated_at,
      }
    });
  }
}