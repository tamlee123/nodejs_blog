import Course from "../models/Course.js";
import { mongooseToObject } from "../../util/mongoose.js";

class CourseController {
  //[GET]/courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}
const courseController = new CourseController();

export { courseController };
