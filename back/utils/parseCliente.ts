import type { TestMock } from "../mocks/test";

type ClienteRecord = {
  id: number;
  cliente: string;
  transcripcion: string;
  escenario: string;
  linkVideo: string;
  preguntas: string;
};

export type ClienteResponse = Omit<ClienteRecord, "preguntas"> & {
  preguntas: TestMock["preguntas"];
};

const parseCliente = (cliente: ClienteRecord): ClienteResponse => {
  return {
    ...cliente,
    preguntas: JSON.parse(cliente.preguntas) as TestMock["preguntas"],
  };
};

export default parseCliente;
