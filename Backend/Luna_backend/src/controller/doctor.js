const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is running on port 3000"));
const Doctor = require("../models/Doctor");

app.get('/doctor', async (req, res) => {
    try {
        const doctor = await Doctor.find()
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  
  // get doctors api
  app.get('/doctor/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('reviews.userId', 'name email');
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
  
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
  });
  