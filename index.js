const express = require("express");
const app = express();
const port = 5000;
const hbs = require("express-handlebars");
const cors = require("cors");
const event = require("./app/controllers/event.controller");
const eventRouter = require("./app/routes/eventRouter");
const eventApiRouter = require("./app/api/eventApi");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/event", eventRouter);
app.use("/api/event", eventApiRouter);

app.engine("hbs", hbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Zapisz się na kurs",
    content: "http://localhost:5000/event",
  });
});

app.post("/update/:id", function (req, res) {
  event.update(req.params.id, req.body, function (err) {
    if (err) res.send(err);
    res.redirect("/event");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
