import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import route from "./routes/index.js";
import db from "./config/db/index.js";

const app = express();
const port = 3000;
//Connect to DB
db.connect();
const __dirname = path.resolve(); // need to define this for using es6 module
app.use(express.static(path.join(__dirname, "src/public")));

//Middleware
app.use(express.urlencoded({ extended: true })); //form html
app.use(express.json()); // code javascript: XMLHttpResquest, fetch, axios,...

//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/resource/views"));

//Routes init
route(app);

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
