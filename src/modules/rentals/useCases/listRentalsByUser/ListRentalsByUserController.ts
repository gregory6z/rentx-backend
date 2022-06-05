import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRentalByUserUseCase } from "./ListRentalByUserUseCase";

export class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const listRentalsByUserUseCase = container.resolve(ListRentalByUserUseCase);

    const rentals = await listRentalsByUserUseCase.execute(id);

    return response.json(rentals);
  }
}
