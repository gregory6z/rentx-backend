import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";

export const carsRoutes = Router();

const createCarController = new CreateCarController();

carsRoutes.post("/", createCarController.handle);
