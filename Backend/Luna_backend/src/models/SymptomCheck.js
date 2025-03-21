const mongoose = require("mongoose");

const symptomCheckSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    enum: ["Breast Cancer", "PCOS", "Endometriosis", "Ovarian Cancer", "Cervical Cancer"],
    required: true,
  },
  responses: [
    {
      question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Symptom.questions",
        required: true,
      },
      answer: mongoose.Schema.Types.Mixed, // Can store Boolean, String, or Array
    },
  ],
  createdAt: { type: Date, default: Date.now },
});




const SymptomCheck = mongoose.model("SymptomCheck", symptomCheckSchema);

module.exports = SymptomCheck;