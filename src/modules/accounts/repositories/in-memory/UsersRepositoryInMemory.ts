import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@shared/infra/typeorm/entities/User";

import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
  Users: User[] = [];

  async create({
    drive_license,
    email,
    password,
    name,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      drive_license,
      email,
      password,
      name,
    });

    this.Users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.Users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.Users.find((user) => user.id === id);
  }
}
