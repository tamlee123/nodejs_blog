import express from "express";
const coursesRouter = express.Router();

import { courseController } from "../app/controllers/CourseController.js";

coursesRouter.get("/create", courseController.create);
coursesRouter.post("/store", courseController.store);
coursesRouter.get("/:slug", courseController.show);

export default coursesRouter;
