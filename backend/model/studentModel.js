const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: string, required: true },

  emailAddress: { type: String, required: true, unique: true },

  matricNumber: { type: String, required: true },

  phoneNumber: { type: String, required: true },

  address: { type: String, required: true },

  age: { type: Number, required: true },

  gender: { type: String, required: true },

  dateOfBirth: { type: String, required: true },

  image: { type: String, required: true },

  class: { type: String, required: true },

  password: { type: String, required: true },

  confirmPassword: { type: String, required: true },
});

const studentModel = new mongoose.Model("studentModel", studentSchema);
module.exports = studentModel;
