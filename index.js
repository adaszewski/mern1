const express = require("express");
const app = express();
const port = 3000;
const hbs = require("express-handlebars");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.engine("hbs", hbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

const Event = require("./app/models/Event");

const event = require("./app/controllers/event.controller");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Zapisz się na kurs",
    content: "formularz",
    
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

app.get('/json', function(req, res){
  event.list(function(err, events){
      if(err) {
          res.status(404);
          res.json({
              error: "brak wydarzeń"
          });
      } else {
          res.json(events);
      }
  });
});


app.post("/add", function (req, res) {
  event.add(req.body, function(err){
    if(err) res.send(err);
    res.redirect("/event")
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
