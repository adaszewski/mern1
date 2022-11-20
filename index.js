const express = require("express");
const app = express();
const port = 5000;
const hbs = require("express-handlebars");
const cors = require("cors");
const event = require("./app/controllers/event.controller");
const kursy= require("./app/controllers/kursy.controller")
const eventRouter = require("./app/routes/eventRouter");
const kursyRouter= require("./app/routes/kursyRouter")
const eventApiRouter = require("./app/api/eventApi");
const kursyApiRouter = require("./app/api/kursyApi");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/event", eventRouter);
app.use("/kursy", kursyRouter);
app.use("/api/event", eventApiRouter);
app.use("/api/kursy", kursyApiRouter);

app.engine("hbs", hbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Zapisz się na kurs",
    content1: "http://localhost:5000/event", 
    content2: "http://localhost:5000/kursy"
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
