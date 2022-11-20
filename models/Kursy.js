const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mern1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const schema = new mongoose.Schema({
  kurs: { type: String, required: true },
  lokalizacja: { type: String, required: true },
  liczba_miejsc: { type: Number, required: true },
});


module.exports = mongoose.model("Kursy", schema);