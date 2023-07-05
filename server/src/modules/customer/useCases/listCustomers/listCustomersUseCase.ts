import { Customer } from "@entites/customer";
import { ICustomerRepository } from "@repositories/ICustomerRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCustomersUseCase {
  constructor(
    @inject("CustomerRepository")
    private ICustomerRepository: ICustomerRepository
  ) {}

  async execute(name?: string): Promise<Customer[]> {
    const customers = await this.ICustomerRepository.list(name);
    
    return customers;
  }
}