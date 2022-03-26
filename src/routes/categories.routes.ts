import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

// import createCategoryController from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

const categoriesRoutes = Router();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) =>
    listCategoriesController.handle(request, response)
);

categoriesRoutes.post("/import", upload.single("file"), (request, response) =>
    importCategoryController.handle(request, response)
);

export { categoriesRoutes };
