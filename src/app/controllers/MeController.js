import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";

class MeController {
  //[GET]/me/stored/courses

  storedCourses(req, res, next) {
    Course.find({})
    .then(courses =>  res.render('me/stored-courses',{
      courses: multipleMongooseToObject(courses)
    }))
    .catch(next)
   
  }
 
}

const meController = new MeController();

export { meController };
