import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { AppError } from "@shared/errors/AppError";

// import { injectable } from "tsyringe";
interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}
// @injectable()
export class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({ user_id, car_id, expected_return_date }): Promise<Rental> {
    const carUnaivailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id,
    );

    if (carUnaivailable) {
      throw new AppError("Car is unavailable");
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id,
    );

    if (rentalOpenToUser) {
      throw new AppError("there's a rental in progress for user!");
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}
