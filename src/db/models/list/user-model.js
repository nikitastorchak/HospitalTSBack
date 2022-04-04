const { Schema, model } = require('mongoose');

const userScheme = new Schema({
  login: {type: String, unique: true, required: true},
  password: {type: String, required: true},
});

module.exports = User = model('user', userScheme);
