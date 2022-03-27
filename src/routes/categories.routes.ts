import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

// import createCategoryController from "../modules/cars/useCases/createCategory";
// import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

const categoriesRoutes = Router();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoriesRoutes };
