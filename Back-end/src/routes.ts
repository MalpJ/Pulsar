// * Importando o metodo ROUTER do express
import { Response, Request, Router } from "express";
import { AuthenticateVerify } from "./middlewares/AuthenticateVerify";

const router = Router(); // variavel com as rotas

// * ROTAS

export { router }