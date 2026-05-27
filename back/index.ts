import express from "express";
import cors from "cors";
import database from "./config/database";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "127.0.0.1";

app.use(express.json());
app.use(cors());
app.use("/api", routes);

database.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(Number(PORT), (error) => {
    if (error) {
      console.error("Server failed to start", error);
      process.exit(1);
    }

    console.log(`Server listening at ${PORT}`);
  });
});
