import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);
// app.get("/", (request, response) => response.json({ message: "Chegou aqui" }));

app.listen(3333);
