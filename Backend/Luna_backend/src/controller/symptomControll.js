const Symptom = require("../models/symptom");

// Get a Symptom by ID
exports.getSymptomById = async (req, res) => {
    try {
        const { id } = req.params;
        const symptom = await Symptom.findById(id);
        
        if (!symptom) {
            return res.status(404).json({ message: "Symptom not found" });
        }

        res.status(200).json(symptom);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Symptoms
exports.getAllSymptoms = async (req, res) => {
    try {
        const symptoms = await Symptom.find({});
        res.status(200).json(symptoms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
