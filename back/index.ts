import cors from "cors";
import express from "express";
import database from "./config/database";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

// database.sync({ force: false }).then(() => {
//   console.log("db connected");
// });
