const mongoose = require("mongoose");

const symptomSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["Breast Cancer", "PCOS", "Endometriosis", "Ovarian Cancer", "Cervical Cancer"],
    required: true,
  },
  questions: [
    {
      question: { type: String, required: true },
      type: {
        type: String,
        enum: ["boolean", "text", "multiple_choice", "number"],
        required: true,
      },
      options: [String], // Only for multiple_choice type
    },
  ],
});

const Symptom = mongoose.model("Symptom", symptomSchema);

module.exports = Symptom;