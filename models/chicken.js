const mongoose = require("mongoose");

const ChickenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide the name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  birthday: { type: Date, required: false },
  weight: { type: Number, required: [true, "please provide the weight"] },
  steps: { type: Number, default: 0 },
  isRunning: { type: Boolean, default: false },
});

module.exports = mongoose.model("Chicken", ChickenSchema);
