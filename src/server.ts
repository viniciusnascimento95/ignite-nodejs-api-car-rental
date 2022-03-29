import express from "express";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
// app.get("/", (request, response) => response.json({ message: "Chegou aqui" }));

app.listen(3333);
