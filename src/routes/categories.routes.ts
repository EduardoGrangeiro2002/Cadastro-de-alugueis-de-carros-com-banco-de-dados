import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/ImportCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/ListCategory/ListCategoryController";

const upload = multer({
  dest: "./tmp",
});
const categoriesRoutes = Router();

const createCategoryControler = new CreateCategoryController();

const importCategoryController = new ImportCategoryController();

const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/", createCategoryControler.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);
categoriesRoutes.get("/", listCategoryController.handle);

export { categoriesRoutes };
