const express = require("express");
const { bookAppointment, respondToAppointment } = require("../controller/appointmentController");

const router = express.Router();

router.post("/send-email", bookAppointment);
router.get("/respond-appointment", respondToAppointment);

module.exports = router;
