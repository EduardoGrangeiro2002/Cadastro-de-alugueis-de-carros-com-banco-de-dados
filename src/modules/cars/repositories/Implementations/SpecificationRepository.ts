import { getRepository, Repository } from "typeorm";

import { Specification } from "../../Entities/Specification";
import {
  ISpecificatiosRepository,
  ICreateSpecificatiosDTO,
} from "../ISpecificatiosRepository";

class SpecificationRepository implements ISpecificatiosRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificatiosDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
  async list(): Promise<Specification[]> {
    const Specifications = await this.repository.find();
    return Specifications;
  }
}
export { SpecificationRepository };
