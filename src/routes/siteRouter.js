import express from "express";
const siteRouter = express.Router();

import { siteController } from "../app/SiteController.js";

siteRouter.use("/search", siteController.search);
siteRouter.use("/", siteController.home);

export default siteRouter;
