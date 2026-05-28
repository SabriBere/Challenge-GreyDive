import prisma from "../config/prisma";
import parseCliente from "../utils/parseCliente";

class ClientesService {
  static async allQuestions() {
    try {
      const [count, clientes] = await Promise.all([
        prisma.cliente.count(),
        prisma.cliente.findMany(),
      ]);

      if (!count) return { status: 404, error: true, data: "List is empty" };
      return { status: 200, error: false, data: { count, rows: clientes.map(parseCliente) } };
    } catch (error) {
      return {
        status: 500,
        error: true,
        data: (error as Error).message,
      };
    }
  }

  static async aboutClient(id: number) {
    try {
      if (Number.isNaN(id)) {
        return { status: 400, error: true, data: "Invalid client id" };
      }

      const data = await prisma.cliente.findUnique({
        where: { id },
      });

      if (!data) return { status: 404, error: true, data: "Cliente no encontrado" };
      return { status: 200, error: false, data: parseCliente(data) };
    } catch (error) {
      return {
        status: 500,
        error: true,
        data: (error as Error).message,
      };
    }
  }
}

export default ClientesService;
