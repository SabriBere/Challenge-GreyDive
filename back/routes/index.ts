import { Router } from "express";
import clientesRoute from "./clientes";

const router = Router();

router.use("/clientes", clientesRoute);

export default router;
