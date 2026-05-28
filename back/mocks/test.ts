export type TestMock = {
  cliente: string;
  transcripcion: string;
  escenario: string;
  linkVideo: string;
  preguntas: {
    texto: string;
    tiempo: string;
    respuesta: string;
    tipoTarea: string;
    link?: string;
  }[];
};

export const testMocks: TestMock[] = [
  {
    cliente: "Viamo",
    escenario: "Necesitas comprar zapatillas, entonces decides visitar el sitio web de Viamo.",
    linkVideo: "https://dbw7vamj238cm.cloudfront.net/Viamo_challenge.mp4",
    transcripcion:
      "La tester recorre el sitio de Viamo, evalua la home, busca zapatillas, revisa fotos del producto, agrega unidades al carrito y analiza opciones de pago y envio.",
    preguntas: [
      {
        tiempo: "0:00:17",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Busca Viamo en Google y entra al sitio web.",
      },
      {
        tiempo: "0:00:44",
        tipoTarea: "opinionScale5",
        respuesta: "3",
        texto: "Del 1 al 5, cuanto te motiva a comprar lo que viste hasta ahora?",
      },
      {
        tiempo: "0:01:27",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Busca unas zapatillas por menos de $17.000.",
      },
      {
        tiempo: "0:04:10",
        tipoTarea: "opinionScale5",
        respuesta: "5",
        texto: "Del 1 al 5, que tanto te motivan las fotos a comprar este producto?",
      },
    ],
  },
  {
    cliente: "Nebula",
    escenario:
      "Estas buscando comprar un juego de mesas de luz para tu cuarto, entonces decides visitar el sitio web de Nebula.",
    linkVideo: "https://dbw7vamj238cm.cloudfront.net/Nebula_challenge.mp4",
    transcripcion:
      "La tester revisa el sitio de Nebula, compara mesas de luz, evalua descripcion, claridad del envio y experiencia de checkout.",
    preguntas: [
      {
        tiempo: "0:00:12",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Busca Nebula en Google y entra al sitio web.",
      },
      {
        tiempo: "0:00:55",
        tipoTarea: "opinionScale5",
        respuesta: "4",
        texto: "Del 1 al 5, cuanto te motiva a comprar lo que viste hasta ahora?",
      },
      {
        tiempo: "0:02:20",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Busca un juego de mesas de luz por menos de $70.000.",
      },
      {
        tiempo: "0:05:40",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Averigua cuanto tardaria el envio a tu domicilio.",
      },
    ],
  },
  {
    cliente: "Farmacity",
    escenario:
      "Necesitas comprar productos de cuidado personal y quieres comparar precios antes de decidir.",
    linkVideo: "https://dbw7vamj238cm.cloudfront.net/Farmacity_challenge.mp4",
    transcripcion:
      "La tester usa el buscador, filtra productos, revisa promociones, intenta encontrar informacion de retiro y evalua la claridad del carrito.",
    preguntas: [
      {
        tiempo: "0:00:20",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Busca un shampoo para cabello seco.",
      },
      {
        tiempo: "0:01:35",
        tipoTarea: "opinionScale5",
        respuesta: "4",
        texto: "Del 1 al 5, que tan facil fue encontrar el producto?",
      },
      {
        tiempo: "0:03:02",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Agrega dos productos al carrito y revisa los medios de pago.",
      },
      {
        tiempo: "0:06:15",
        tipoTarea: "opinionScale5",
        respuesta: "3",
        texto: "Del 1 al 5, cuanta confianza te inspira el checkout?",
      },
    ],
  },
  {
    cliente: "Mercado Libre",
    escenario:
      "Quieres comprar auriculares inalambricos y comparar opciones por precio, envio y reputacion.",
    linkVideo: "https://dbw7vamj238cm.cloudfront.net/MercadoLibre_challenge.mp4",
    transcripcion:
      "La tester busca auriculares, usa filtros, compara publicaciones, revisa reputacion del vendedor y analiza informacion de envio.",
    preguntas: [
      {
        tiempo: "0:00:18",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Busca auriculares inalambricos con envio gratis.",
      },
      {
        tiempo: "0:01:48",
        tipoTarea: "verbalResponse",
        respuesta: "respuesta verbal",
        texto: "Compara tres publicaciones y elige una.",
      },
      {
        tiempo: "0:04:05",
        tipoTarea: "opinionScale5",
        respuesta: "5",
        texto: "Del 1 al 5, que tan clara es la informacion del vendedor?",
      },
      {
        tiempo: "0:07:11",
        tipoTarea: "opinionScale5",
        respuesta: "4",
        texto: "Del 1 al 5, que tan probable es que compres este producto?",
      },
    ],
  },
];
