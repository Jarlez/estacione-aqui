import { Customer } from "@entites/customer";
import { Customer as rawCustomer } from "@prisma/client"


export class PrismaCustomerMapper {
  static toPrisma(customer: Customer) {
    return {
      id: customer.id,
      name: customer.name,
      cpf: customer.cpf,
      contact_number: customer.contact_number,
      working_store: customer.working_store,
      created_at: customer.created_at,
      updated_at: customer.updated_at,
    }
  }

  static toDomain(raw: rawCustomer) {
    return new Customer({
      name: raw.name,
      cpf: raw.cpf,
      contact_number: raw.contact_number,
      working_store: raw.working_store,
      created_at: raw.created_at,
      updated_at: raw.updated_at,
      delete_at: raw.delete_at,
    },
      raw.id
    );
  }
}