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
  event.get(req.params.id, function (err, event) {
    if (err) res.send(err);
    res.render("mod_event", event);
  });
});

router.post("/add", function (req, res) {
    event.add(req.body, function (err) {
        if (err) res.send(err);
        res.json({added: true});
        
      });
    });
;

router.get("/del/:id", function (req, res) {
    
    event.delete(req.body, function (err) {
      if (err) res.send(err);
        
    });
  });
  

module.exports = router;
