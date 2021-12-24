import { container } from "tsyringe";

import { ICategoryRepositoryInterface } from "../../modules/cars/repositories/ICategoriesRepositoryInterface";
import { CategoriesRepository } from "../../modules/cars/repositories/Implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/Implementations/SpecificationRepository";
import { ISpecificatiosRepository } from "../../modules/cars/repositories/ISpecificatiosRepository";

container.registerSingleton<ICategoryRepositoryInterface>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificatiosRepository>(
  "SpecificationsRepository",
  SpecificationRepository
);
