const express=require("express");
const router = express.Router();

const event = require("../controllers/event.controller");


router.get("", function (req, res) {
    event.list(function (err, events) {
      if (err) res.send(err);
      res.render("event", { events });
    });
  });
  
  router.get("/:kurs_id", function (req, res) {
    event.get(req.params.kurs_id, function (err, event) {
      if (err) res.send(err);
      res.render("mod_event", event);
    });
  });
  
  router.post("/add", function (req, res) {
    event.add(req.body, function (err) {
      if (err) res.send(err);
      res.redirect("/event");
    });
  });
  
  router.get("/del/:id", function (req, res) {
    event.delete(req.params.id, function (err) {
      if (err) res.send(err);
      res.redirect("/event");
    });
  });

  router.post("/update/:id", function (req, res) {
    event.update(req.params.id, req.body, function (err) {
      if (err) res.send(err);
      res.redirect("/event");
    });
  });

  module.exports=router;