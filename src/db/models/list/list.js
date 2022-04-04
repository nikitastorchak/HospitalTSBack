const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointScheme = new Schema({
  user_id: String,
  fio: String,
  doctor: String,
  date: Date,
  complaint: String 
});

module.exports = Appoint = mongoose.model('appoints', appointScheme);



