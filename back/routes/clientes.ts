import { Router } from "express";
import clientesControllers from "../controllers/clientesControlles";

const router = Router();

router.get("/", clientesControllers.allQuestions);
router.get("/:id", clientesControllers.aboutClient);

export default router;
