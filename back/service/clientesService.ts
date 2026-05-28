import type { Cliente } from "@prisma/client";
import prisma from "../config/prisma";
import type { TestMock } from "../mocks/test";

type ServiceResponse<T> = {
  error: boolean;
  data: T;
};

type ClienteResponse = Omit<Cliente, "preguntas"> & {
  preguntas: TestMock["preguntas"];
};

const parseCliente = (cliente: Cliente): ClienteResponse => {
  return {
    ...cliente,
    preguntas: JSON.parse(cliente.preguntas) as TestMock["preguntas"],
  };
};

class clientesService {
  static async allQuestions(): Promise<
    ServiceResponse<string | { count: number; rows: ClienteResponse[] }>
  > {
    try {
      const [count, clientes] = await Promise.all([
        prisma.cliente.count(),
        prisma.cliente.findMany(),
      ]);

      if (!count) return { error: true, data: "List is empty" };
      return { error: false, data: { count, rows: clientes.map(parseCliente) } };
    } catch (error) {
      return { error: true, data: error instanceof Error ? error.message : "Unknown error" };
    }
  }

  static async aboutClient(id: number): Promise<ServiceResponse<string | ClienteResponse>> {
    try {
      const data = await prisma.cliente.findUnique({
        where: { id },
      });

      if (!data) return { error: true, data: "Cliente no encontrado" };
      return { error: false, data: parseCliente(data) };
    } catch (error) {
      return { error: true, data: error instanceof Error ? error.message : "Unknown error" };
    }
  }
}

export default clientesService;
