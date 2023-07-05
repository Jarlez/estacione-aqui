import { AppErrors } from "@errors/appErrors";
import { ICustomerRepository } from "@repositories/ICustomerRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class UndeleteCustomerUseCase {

  constructor(
    @inject("CustomerRepository")
    private ICustomerRepository: ICustomerRepository
  ) {}

  async execute(customerId: string): Promise<void> {
    const customer = await this.ICustomerRepository.findById(customerId);

    if (!customer) throw new AppErrors("Mensalista não encontrado", 404);

    customer.undelete();

    await this.ICustomerRepository.save(customer);
  }
}