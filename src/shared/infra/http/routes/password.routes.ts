import { ResetPasswordController } from "@modules/accounts/useCases/resetPasswordUser/ResetPasswordController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController";
import { Router } from "express";

export const passwordRoutes = Router();

const sendPasswordMailController = new SendForgotPasswordMailController();

const resetPasswordController = new ResetPasswordController();

passwordRoutes.post("/forgot", sendPasswordMailController.handle);

passwordRoutes.post("/reset", resetPasswordController.handle);
