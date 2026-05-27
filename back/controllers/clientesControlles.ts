import type { Request, Response } from "express";
import clientesService from "../service/clientesService";

class clientesControllers {
  static async allQuestions(_req: Request, res: Response) {
    const { error, data } = await clientesService.allQuestions();
    if (error) return res.status(400).json({ data });
    return res.status(200).json({ data });
  }

  static async aboutClient(req: Request, res: Response) {
    const { id } = req.params;
    const { error, data } = await clientesService.aboutClient(Array.isArray(id) ? id[0] : id);
    if (error) return res.status(400).json({ data });
    return res.status(200).json({ data });
  }
}

export default clientesControllers;
