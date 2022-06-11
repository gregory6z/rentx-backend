import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

export const passwordRoutes = Router();

const sendPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post("/forgot", sendPasswordMailController.handle);
