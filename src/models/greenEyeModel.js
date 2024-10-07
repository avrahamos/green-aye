const mongoose = require("mongoose");

const popolationSchema = new mongoose.Schema({
  areas: [String],
  unit: [Number],
});
const greenEyeScema = new mongoose.Schema({
  craeted_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "required do you are"],
  },
  length: {
    type: Number,
    default: 3,
  },
  replies: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
  },
  popolation: {
    type: popolationSchema,
  },
});

const GreenEyeModel = mongoose.model("user", greenEyeScema);
module.exports = GreenEyeModel;
