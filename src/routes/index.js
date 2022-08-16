import newsRouter from "./newsRouter.js";
import siteRouter from "./siteRouter.js";
import coursesRouter from "./coursesRouter.js";
import meRouter from "./meRouter.js";

function route(app) {
  app.use('/me', meRouter);
  app.use("/courses", coursesRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

export default route;
