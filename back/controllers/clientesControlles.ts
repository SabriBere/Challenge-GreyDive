import type { Request, Response } from "express";
import ClientesService from "../service/clientesService";

class clientesControllers {
  static async allQuestions(_req: Request, res: Response) {
    const { status, data } = await ClientesService.allQuestions();
    return res.status(status).json({ data });
  }

  static async aboutClient(req: Request, res: Response) {
    const clientId = Number(req.params.id);
    const { status, data } = await ClientesService.aboutClient(clientId);
    return res.status(status).json({ data });
  }
}

export default clientesControllers;
