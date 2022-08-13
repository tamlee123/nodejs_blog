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
  //[GET] /courses/create => to render create view
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store => to add data
  store(req, res, next) {
    //res.json(req.body)
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

const courseController = new CourseController();

export { courseController };
