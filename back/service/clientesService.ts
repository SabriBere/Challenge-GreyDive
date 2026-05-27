import { Cliente } from "../models";

type ServiceResponse<T> = {
  error: boolean;
  data: T;
};

class clientesService {
  static async allQuestions(): Promise<
    ServiceResponse<string | { count: number; rows: Cliente[] }>
  > {
    try {
      const { count, rows } = await Cliente.findAndCountAll({});
      if (!count) return { error: true, data: "List is empty" };
      return { error: false, data: { count, rows } };
    } catch (error) {
      return { error: true, data: error instanceof Error ? error.message : "Unknown error" };
    }
  }

  static async aboutClient(id: string): Promise<ServiceResponse<string | Cliente>> {
    try {
      const data = await Cliente.findByPk(id);
      if (!data) return { error: true, data: "Cliente no encontrado" };
      return { error: false, data };
    } catch (error) {
      return { error: true, data: error instanceof Error ? error.message : "Unknown error" };
    }
  }
}

export default clientesService;
