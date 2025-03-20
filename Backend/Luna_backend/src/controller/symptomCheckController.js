const User = require("../models/User");
const SymptomAnalysis = require("../models/SymptomAnalysis");
const Symptom = require("../models/symptom");
const mongoose = require("mongoose");

// POST: Save Symptom Check Responses
exports.saveSymptomCheck = async (req, res) => {
    try {
        const { userId, category, responses } = req.body;

        // Validate user existence
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Validate symptom category
        const symptom = await Symptom.findOne({ category });
        if (!symptom) return res.status(400).json({ message: `Category '${category}' not found` });

        // Format responses
        const formattedResponses = responses.map((qn) => {
            const question = symptom.questions.find((q) => q._id.toString() === qn.question_id);
            if (!question) throw new Error(`Invalid question ID: ${qn.question_id} for category: ${category}`);

            return { answer: qn.answer, question_statement: question.question };
        });

        // Generate summary
        const processedResponses = `For category: ${category}\n` + 
            formattedResponses
                .map((item) => `The answer is ${item.answer} for the question: ${item.question_statement}`)
                .join("\n");

        // Check if a record already exists
        let existingCheck = await SymptomAnalysis.findOne({ userId });

        if (existingCheck) {
            existingCheck.history.push({
                summary: existingCheck.summary,
                timestamp: existingCheck.timestamp,
            });

            existingCheck.summary = processedResponses;
            await existingCheck.save();
            return res.status(200).json({ message: "Updated existing analysis", data: existingCheck });
        } else {
            const newAnalysis = new SymptomAnalysis({
                userId,
                summary: processedResponses,
                history: [],
            });

            await newAnalysis.save();
            return res.status(201).json({ message: "New analysis created", data: newAnalysis });
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// GET: Get AI Analysis Response for a User
exports.getSymptomResult = async (req, res) => {
    try {
        const { userid } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userid)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const symptoms = await SymptomAnalysis.find({ userId: userid });
        res.status(200).json(symptoms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
