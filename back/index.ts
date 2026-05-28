import express from "express";
import cors from "cors";
import prisma from "./config/prisma";
import routes from "./routes";

const PORT = Number(process.env.PORT! ?? 8080);
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api", routes);

async function startServer() {
  try {
    await prisma.$connect();
    console.log("db connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }

  server.listen(PORT, () => {
    console.log("Environment", process.env.NODE_ENV);
    console.log("Server listen", PORT);
    console.log("API version", process.env.npm_package_version);
  });
}

startServer();
