import { ICreteUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: ICreteUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
