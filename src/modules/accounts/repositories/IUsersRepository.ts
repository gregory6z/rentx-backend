import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../../../shared/infra/typeorm/entities/User";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
