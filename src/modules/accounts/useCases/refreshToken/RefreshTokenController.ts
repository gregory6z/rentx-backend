import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

export class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);
    await refreshTokenUseCase.execute();

    return response.json();
  }
}
