import { inject, injectable } from "tsyringe";

import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificatiosRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExist =
      await this.specificationRepository.findByName(name);
    if (specificationAlreadyExist) {
      throw new Error("Specification already exist");
    }
    this.specificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
