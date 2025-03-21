const mongoose = require("mongoose");

const doctorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  description: { type: String, required: true }, // Correct field name
  email: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  ratings: { type: Number, default: 0 }, // Average rating
  reviews: [{
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      rating: { type: Number, required: true, min: 1, max: 5 },
      comment: { type: String }
  }]
});

// Create Doctor model
const Doctor = mongoose.model("Doctor", doctorsSchema);
module.exports = Doctor;