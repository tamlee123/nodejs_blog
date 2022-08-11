import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";

class SiteController {
  //[GET]/
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
    //.catch(error => next(error));
  }
  //[GET]/search
  search(req, res) {
    res.render("Search");
  }
}
const siteController = new SiteController();

export { siteController };
