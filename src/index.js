import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
const app = express();
const port = 3000;

const __dirname = path.resolve(); // need to define this for using es6 module
app.use(express.static(path.join(__dirname, "src/public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "src/resource/views"));

app.get("/", (req, res) => res.render("home"));
app.get("/news", (req, res) => res.render("news"));

//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
