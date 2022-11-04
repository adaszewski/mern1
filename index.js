const express = require("express");
const app = express();
const port = 3000;
const hbs = require("express-handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("hbs", hbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

const Event = require("./app/models/Event");

const event = require("./app/controllers/event.controller");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Zapisz się na kurs",
    content: "http://localhost:3000/event",
  });
});

app.get("/mongoose", (req, res) => {
  Event.find({ lokalizacja: "Warszawa" })
    .lean()
    .exec(function (err, events) {
      console.log(events);
    });

  newEvent.save(function (err) {
    console.log("zrobione");
  });
  res.send("done");
});

app.get("/event", function (req, res) {
  event.list(function (err, events) {
    if (err) res.send(err);

    res.render("event", { events });
  });
});



app.get("/event/:id", function (req, res) {
  event.get(req.params.id, function (err, event) {
    if (err) res.send(err);
    res.render("mod_event", event);
  });
});

app.get("/json", function (req, res) {
  event.list(function (err, events) {
    if (err) {
      res.status(404);
      res.json({
        error: "brak wydarzeń",
      });
    } else {
      res.json(events);
    }
  });
});

app.post("/add", function (req, res) {
  event.add(req.body, function (err) {
    if (err) res.send(err);
    res.redirect("/event");
  });
});

app.get("/event/del/:id", function (req, res) {
  event.delete(req.params.id, function (err, post) {
    if (err) res.send(err);
    res.redirect("/event");
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
