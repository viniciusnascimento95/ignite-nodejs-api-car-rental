import { Router } from "express";

import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) =>
    createCategoryController.handle(request, response)
);

categoriesRoutes.get("/", (request, response) =>
    listCategoriesController.handle(request, response)
);

categoriesRoutes.post("/import", (request, response) => {});

export { categoriesRoutes };
