const express = require("express");
const { getAllDoctors, getDoctorById } = require("../controller/doctorController");

const router = express.Router();

router.get("/doctor", getAllDoctors);
router.get("/doctor/:id", getDoctorById);

module.exports = router;
