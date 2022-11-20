const Kursy = require("../../models/Kursy");

function kursyTable(cb) {
  Kursy.find()
    .lean()
    .exec(function (err, events) {
      if (err) {
        cb(err);
      } else {
        cb(null, events);
      }
    });
}

function kursyGet(_id, cb) {
  Kursy.findById(_id).exec(function (err, kurs) {
    if (err) {
      cb(err);
    } else {
      cb(null, kurs);
    }
  });
}

function kursyAdd(data, cb) {
  let newKurs = new Kursy(data);
  newKurs.save(function (err, kurs) {
    if (err) {
      cb(err);
    } else {
      cb(null, kurs);
    }
  });
}

function kursyUpdate(id, data, cb) {
  Kursy.updateOne({ _id: id }, data, function (err, kurs) {
    if (err) {
      cb(err);
    } else {
      cb(null, kurs);
    }
  });
}

function kursyDelete(id, cb) {
  Kursy.deleteOne({ _id: id }, function (err, kurs) {
    if (err) {
      cb(err);
    } else {
      cb(null, kurs);
    }
  });
}

module.exports = {
  list: kursyTable,
  get: kursyGet,
  add: kursyAdd,
  update: kursyUpdate,
  delete: kursyDelete,
};
