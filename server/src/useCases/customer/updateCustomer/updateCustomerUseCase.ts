import { IUpdateCustomer } from "@DTO/customer";
import { Customer } from "@entites/customer";
import { AppErrors } from "@errors/appErrors";
import { ICustomerRepository } from "@repositories/ICustomerRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UpdateCustomerUseCase {
  
  constructor(
    @inject("CustomerRepository")
    private ICustomerRepository: ICustomerRepository
  ) {}

  async execute(data: IUpdateCustomer, customerId: string): Promise<void> {
    const customerExist = await this.ICustomerRepository.findById(customerId);

    if (!customerExist) throw new AppErrors("Mensalista não encontrado", 404);

    const customer = new Customer(data);

    await this.ICustomerRepository.update(customer, customerId);
  }
}