import { injectable, inject } from "tsyringe";

import { Customer } from "@entites/customer";
import { ICustomerRepository } from "@repositories/ICustomerRepository";
import { IRegisterCustomer } from "@DTO/customer";
import { AppErrors } from "@errors/appErrors";

@injectable()
export class RegisterCustomerUseCase {

  constructor(
    @inject('CustomerRepository')
    private ICustomerRepository: ICustomerRepository
  ) {}

  async execute(data: IRegisterCustomer): Promise<void> {
    const customerAlreadyExist = await this.ICustomerRepository.findByCPF(data.cpf);

    if (customerAlreadyExist) throw new AppErrors("Mensalista já cadastrado", 404);

    const customer = new Customer(data);
    await this.ICustomerRepository.save(customer);
  }
}