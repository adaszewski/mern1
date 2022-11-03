const Event = require("../models/Event");

function eventTable(cb) {
  Event.find()
    .lean()
    .exec(function (err, events) {
      if (err) {
        cb(err);
      } else {
        cb(null, events);
      }
    });
}

function eventGet(_id, cb) {
  Event.findById(_id).exec(function (err, event) {
    if (err) {
      cb(err);
    } else {
      cb(null, event);
    }
  });
}

function eventAdd(data, cb) {
  let newEvent = new Event(data);

  newEvent.save(function (err, event) {
    if (err) {
      cb(err);
    } else {
      cb(null, event);
    }
  });
}

function eventUpdate(id, data, cb) {
  Event.updateOne({ id: id }, data, function (err, event) {
    if (err) {
      cb(err);
    } else {
      cb(null, event);
    }
  });
}

function eventDelete(id, cb) {
  Event.deleteOne({ _id: id }, function (err, event) {
    if (err) {
      cb(err);
    } else {
      cb(null, event);
    }
  });
}

module.exports = {
  list: eventTable,
  get: eventGet,
  add: eventAdd,
  update: eventUpdate,
  delete: eventDelete,
};
