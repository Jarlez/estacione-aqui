import { Customer } from "@entites/customer";

export interface ICustomerRepository {
  findByCPF(cpf: string): Promise<Customer | null>;
  findById(id: string): Promise<Customer | null>;
  save(data: Customer): Promise<void>
}