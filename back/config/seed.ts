import prisma from "./prisma";
import { testMocks } from "../mocks/test";

async function seedFunction() {
  await prisma.cliente.deleteMany();
  await prisma.cliente.createMany({
    data: testMocks.map((test) => ({
      ...test,
      preguntas: JSON.stringify(test.preguntas),
    })),
  });
  await prisma.$disconnect();
}

seedFunction()
  .then(() => {
    console.log("Test mocks seeded successfully");
  })
  .catch((error) => {
    console.error("Error seeding test mocks", error);
    void prisma.$disconnect();
  });
