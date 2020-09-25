let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  date: new Date().setDate(new Date().getDate()-10),
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
})

const WorkOut = mongoose.model("Exercises", WorkOutSchema)

module.exports = WorkOut

