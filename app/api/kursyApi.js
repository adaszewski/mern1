const express = require("express");
const router = express.Router();

const kursy = require("../controllers/kursy.controller");

router.get("/all", function (req, res) {
  kursy.list(function (err, kursy) {
    if (err) {
      res.status(404);
      res.json({
        error: "brak wydarzeń",
      });
    } else {
      res.json(kursy);
    }
  });
});

router.get("/:id", function (req, res) {
  kursy.list(req.params.id, function (err, kursy) {
    if (err) res.send(err);
    res.json(kursy);
  });
});

router.post("/add", function (req, res) {
  kursy.add(req.body, function (err) {
    if (err) res.send(err);
    res.json({ added: true });
  });
});

router.delete("/del/:id", function (req, res) {
  console.log(req.params.id)
  kursy.delete(req.params.id, function (err) {
    if (err) res.send(err);
  });
});

router.put("/update/:id", function (req, res) {
  kursy.update(req.params.id, req.body, function (err) {
    if (err) res.send(err);

    res.json({ updated: true });
  });
  
});

module.exports = router;
