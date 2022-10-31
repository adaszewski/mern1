const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mern1", { useNewUrlParser: true });

const schema = new mongoose.Schema({
  imie: { type: String, required: true },
  nazwisko: { type: String, required: true },
  kurs: { type: String, required: true },
  lokalizacja: { type: String, required: true },
});

module.exports = mongoose.model("Event", schema);
