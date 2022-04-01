import newsRouter from "./newsRouter.js";
import siteRouter from "./siteRouter.js";

function route(app) {
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

export default route;
