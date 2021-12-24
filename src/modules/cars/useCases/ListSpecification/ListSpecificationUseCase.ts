import { inject, injectable } from "tsyringe";

import { Specification } from "../../Entities/Specification";
import { ISpecificatiosRepository } from "../../repositories/ISpecificatiosRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificatiosRepository
  ) {}
  async execute(): Promise<Specification[]> {
    const ListSpecification = await this.specificationRepository.list();

    return ListSpecification;
  }
}

export { ListSpecificationUseCase };
