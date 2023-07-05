import { Customer } from "@entites/customer";

export interface ICustomerRepository {
  create(data: Customer): Promise<void>;
  findByCPF(cpf: string): Promise<Customer | null>;
  findById(id: string): Promise<Customer | null>;
  save(data: Customer): Promise<void>;
}