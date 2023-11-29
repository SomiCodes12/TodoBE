import express, { Application , Express , Request , Response } from "express";

import dotenv from "dotenv";
import dbConfig from "./Config/db";
import appConfig from "./mainApp";
import swaggerDocs  from "./Utils/swagger";
dotenv.config();

const port: number = parseInt(process.env.PORT!);

const app: Express = express();

appConfig(app);

const server = app.listen(process.env.PORT || port, () => {
  dbConfig();
console.log("Server Live");

  swaggerDocs(app , port)
});

process.on("uncaughtException", (error: any) => {
  console.log(error);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log(reason);
  server.close(() => {
    process.exit(1);
  });
});
