import Course from "../models/Course.js";

class SiteController {
  //[GET]/
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({ error: "ERROR" });
    //   }
    // });
    Course.find({})
      .then((courses) => res.json(courses))
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
