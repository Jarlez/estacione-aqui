import { Customer } from "@entites/customer";
import { AppErrors } from "@errors/appErrors";
import { ICustomerRepository } from "@repositories/ICustomerRepository";
import { injectable, inject } from "tsyringe"

@injectable()
export class ListCustomDeletedUseCase {
  constructor(
    @inject("CustomerRepository")
    private ICustomerRepository: ICustomerRepository
  ) {}

  async execute(name?: string): Promise<Customer[]> {
    const customerDeleted = await this.ICustomerRepository.listCustomerDeleted(name);

    return customerDeleted;
  }

}