import { ICreteUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
  create(data: ICreteUserDTO): Promise<void>;
}
