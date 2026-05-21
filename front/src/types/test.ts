export type Task = {
  id?: number;
  texto: string;
  tiempo: string;
  respuesta: string;
  tipoTarea?: string;
};

export type Test = {
  id: number;
  cliente: string;
  escenario: string;
  transcripcion: string;
  linkVideo: string;
  preguntas?: Task[];
};
