const express = require("express");
const { getSymptomById, getAllSymptoms } = require("../controller/symptomControll");

const router = express.Router();

router.get("/symptoms/:id", getSymptomById);
router.get("/symptoms", getAllSymptoms);

module.exports = router;
