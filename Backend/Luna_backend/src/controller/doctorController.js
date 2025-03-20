const Doctor = require("../models/Doctor");

// GET: Fetch all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// GET: Fetch a single doctor by ID
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id).populate('reviews.userId', 'name email');
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
