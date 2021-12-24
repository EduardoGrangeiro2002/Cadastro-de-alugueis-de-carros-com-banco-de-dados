import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/CreateSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/ListSpecification/ListSpecificationController";

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();

const listSpecificationController = new ListSpecificationController();

specificationRouter.post("/", createSpecificationController.handle);

specificationRouter.get("/", listSpecificationController.handle);

export { specificationRouter };
