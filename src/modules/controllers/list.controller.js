const Task = require('../../db/models/list/list')

module.exports.add = (req, res) => {
  const body = req.body
  const {user_id, fio, doctor, date, complaint } = body
  res.set('Access-Control-Allow-Origin', '*');
  const appoint = new Appoint({
    user_id: user_id,
    fio: fio,
    doctor: doctor,
    date: date,
    complaint: complaint
  });
  appoint.save().then(result => {
    res.send(result);
  });
};

module.exports.show = (req, res) => {
  const user_id = req.query.user_id
  Appoint.find({user_id: user_id}).then((result) => {
    res.send(result);
  }).catch((err) => {
    res.send(err);
  });
};

module.exports.update = (req, res) => {
  const body = req.body
  res.set('Access-Control-Allow-Origin', '*');
  Appoint.updateOne({ _id: body._id }, {
    $set: {
      fio: body.fio,
      doctor: body.doctor,
      date: body.date,
      complaint: body.complaint
    },
  }).then(result => {
    Appoint.find().then((result) => {
      res.send(result);
    });
  });
};

module.exports.del = (req, res) => {
  const id = req.query._id;
  if (id) {
    Appoint.deleteOne({ _id: id }).then(result => {
      Task.find().then((result2) => {
      res.send(result2);
    }).catch((err) => {
      res.send(err);
    });
    })
    
  }
};