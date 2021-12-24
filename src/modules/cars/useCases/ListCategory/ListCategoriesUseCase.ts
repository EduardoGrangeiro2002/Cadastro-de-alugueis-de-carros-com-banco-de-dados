import { inject, injectable } from "tsyringe";

import { Category } from "../../Entities/Category";
import { ICategoryRepositoryInterface } from "../../repositories/ICategoriesRepositoryInterface";

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepositoryInterface
  ) {}
  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
