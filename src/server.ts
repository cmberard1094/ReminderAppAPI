import express, { Express } from "express";
import dotenv from "dotenv";
import { initDB } from "./db/mongo";
import router from "./controller/reminder";
import cors from "cors";

dotenv.config();

const app: Express = express();

// add validations for env vars
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI

const startApp = async () => {
  app.use(cors())
  app.use(express.json());
  app.use(router)

  await initDB(MONGO_URI)

  app.listen(port, () => console.log(`Server running on port ${port}`));
}
startApp()
