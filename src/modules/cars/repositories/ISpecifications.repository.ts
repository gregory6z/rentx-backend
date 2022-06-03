import { Specification } from "../infra/typeorm/entities/Specification";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
export interface ISpecificationsRepository {
  create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}
