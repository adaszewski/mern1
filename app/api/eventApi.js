const express = require("express");
const router = express.Router();

const event = require("../controllers/event.controller");


router.get("/all", function (req, res) {
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

router.get("/:id", function (req, res) {
  event.list(req.params.id, function (err, event) {
    if (err) res.send(err);
    res.json(event);
  });
});

router.post("/add", function (req, res) {
  event.add(req.body, function (err) {
    if (err) res.send(err);
    res.json({ added: true });
  });
});

router.delete("/del/:id", function (req, res) {
  console.log(req.params.id);
  event.delete(req.params.id, function (err) {
    if (err) res.send(err);
  });
});

router.put("/update/:id", function (req, res) {
  event.update(req.params.id, req.body, function (err) {
    if (err) res.send(err);

    res.json({ updated: true });
  });
});

module.exports = router;
