import { Specification } from "../Entities/Specification";

interface ICreateSpecificatiosDTO {
  name: string;
  description: string;
}

interface ISpecificatiosRepository {
  create({ name, description }: ICreateSpecificatiosDTO): Promise<void>;

  findByName(name: string): Promise<Specification>;

  list(): Promise<Specification[]>;
}

export { ISpecificatiosRepository, ICreateSpecificatiosDTO };
