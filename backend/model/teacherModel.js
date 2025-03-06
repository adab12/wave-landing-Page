const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },

  emailAddress: { type: String, required: true, unique: true },

  uplaodData: { type: String, required: true, unique: true },

  passwaord: { type: String, required: true },

  confirmpassword: { type: String, required: true },
});

const teacherModel = new mongoose.Model("teacherModel", teacherSchema);
module.exports = teacherModel;
