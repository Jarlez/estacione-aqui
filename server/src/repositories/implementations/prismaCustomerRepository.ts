import { Customer } from "@entites/customer";
import { prisma } from "@lib/prisma";
import { ICustomerRepository } from "@repositories/ICustomerRepository"
import { PrismaCustomerMapper } from "@repositories/mappers/prismaCustomerMapper";


export class PrismaCustomerRepository implements ICustomerRepository {
  async listCustomerDeleted(name?: string | undefined): Promise<Customer[]> {
    let customers = await prisma.customer.findMany({
      where: {
        delete_at: {
          not: null
        },
        name: {
          contains: name,
        }
      },
      include: {
        Vehicle: true
      }
    });
    
    customers = name
      ? customers
      : await prisma.customer.findMany({
        where: {
          delete_at: {
            not: null
          }
        },
        include: {
          Vehicle: true
        }
      });
    
    return customers.map(PrismaCustomerMapper.toDomain)
  }
  
  async update(data: Customer, id: string): Promise<void> {
    const raw = PrismaCustomerMapper.toPrisma(data);
    await prisma.customer.update({
      where: {
        id
      },
      data: {
        name: raw.name,
        contact_number: raw.contact_number,
        working_store: raw.working_store
      }
    });
  }

  async create(data: Customer): Promise<void> {
    const raw = PrismaCustomerMapper.toPrisma(data);
    
    await prisma.customer.create({
      data: {
        name: raw.name,
        cpf: raw.cpf,
        contact_number: raw.contact_number,
        working_store: raw.working_store,
        created_at: raw.created_at,
        updated_at: raw.updated_at,
        delete_at: raw.delete_at
      }
    });
  }

  async list(name?: string | undefined): Promise<Customer[]> {
    let customers = await prisma.customer.findMany({
      where: {
        delete_at: null,
        name: {
          contains: name,
        }
      },
      include: {
        Vehicle: true
      }
    });

    customers = name
      ? customers
      : await prisma.customer.findMany({
        where: {
          delete_at: null
        },
        include: {
          Vehicle: true
        }
      });

    return customers.map(PrismaCustomerMapper.toDomain)
  }

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

    await prisma.customer.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}