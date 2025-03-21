const express = require("express");
const { rateDoctor } = require("../controller/ratingController");

const router = express.Router();

router.post("/rate-doctor", rateDoctor);

module.exports = router;
