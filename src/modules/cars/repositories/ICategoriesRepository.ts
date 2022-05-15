import { Category } from "../entities/Category";

export interface ICreteCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreteCategoryDTO): Promise<void>;
}
