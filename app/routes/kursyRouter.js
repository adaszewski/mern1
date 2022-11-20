const express=require("express");
const router = express.Router();

const kursy = require("../controllers/kursy.controller");


router.get("", function (req, res) {
    kursy.list(function (err, kursy) {
      if (err) res.send(err);
      res.render("kursy", { kursy });
    });
  });
  
  router.get("/:id", function (req, res) {
    kursy.get(req.params.id, function (err, kursy) {
      if (err) res.send(err);
      res.render("mod_kursy", kursy);
    });
  });
  
  router.post("/add", function (req, res) {
    kursy.add(req.body, function (err) {
      if (err) res.send(err);
      res.redirect("/kursy");
    });
  });
  
  router.get("/del/:id", function (req, res) {
    kursy.delete(req.params.id, function (err) {
      if (err) res.send(err);
      res.redirect("/kursy");
    });
  });

  router.post("/update/:id", function (req, res) {
    kursy.update(req.params.id, req.body, function (err) {
      if (err) res.send(err);
      res.redirect("/kursy");
    });
  });

  module.exports=router;