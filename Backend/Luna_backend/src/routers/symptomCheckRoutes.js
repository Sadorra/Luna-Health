const express = require("express");
const { saveSymptomCheck, getSymptomResult } = require("../controller/symptomCheckController");

const router = express.Router();

router.post("/symptom-check", saveSymptomCheck);
router.get("/result/:userid", getSymptomResult);

module.exports = router;
