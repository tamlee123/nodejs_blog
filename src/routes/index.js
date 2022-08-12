import newsRouter from "./newsRouter.js";
import siteRouter from "./siteRouter.js";
import coursesRouter from "./coursesRouter.js";

function route(app) {
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

export default route;
