const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  meeting: { type: String, 
    enum :['inperson', 'online'],
    
    required: true },
  date: { type: String, required: true },
 status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;