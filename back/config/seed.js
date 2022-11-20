const Questions = require("../models/Questions")
const questionsSeed = require("./questions")


async function askQuestions() {
  const preguntas = questionsSeed
  for (let index = 0; index < preguntas.length; index++) {
    console.log(preguntas)
    Questions.create({
        tipoTarea: preguntas[index].tipoTarea,
        texto: preguntas[index].texto,
    });
  }
}
askQuestions();
