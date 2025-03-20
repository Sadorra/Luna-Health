const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is running on port 3000"));

const User = require("../models/User");
const SymptomAnalysis = require("../models/SymptomAnalysis");
const Symptom = require("../models/symptom");


// POST: Save Symptom Check Responses
app.post("/api/symptom-check", async (req, res) => {
  try {
    const { userId,category,responses } = req.body;

    // Validate user existence
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Extract unique categories from responses
    const symptom = await Symptom.findOne({ category });
    if (!symptom) return res.status(400).json({ message: `Category '${category}' not found` });

      const formattedResponses = responses.map((qn) => {
        const question = symptom.questions.find((q) => q._id.toString() === qn.question_id);
        if (!question) throw new Error(`Invalid question ID: ${qn.question_id} for category: ${response.category}`);

        return {answer: qn.answer ,question_statemnt:question.question};
      });

  
  
    const newEntry = [
      category,
      formattedResponses,
    ];


    // Summarize
    const processedResponses = `For a category: ${newEntry[0]}\n` + 
    newEntry[1]
      .map(
        (item) =>
          `The answer is ${item.answer} for the question: ${item.question_statemnt}`
      )
      .join("\n");
      
      // Send data to AI for analysis
      // const aiSummary = await analyzeSymptomsWithAI(processedResponses);
      
      // Store AI-generated summary in a separate collection
    const existingCheck = await SymptomAnalysis.findOne({ userId });
  // Update existing check with AI-generated summary
  if (existingCheck) {
      if (!existingCheck.history) {
          existingCheck.history = [];
      }
      existingCheck.history.push({
          summary: existingCheck.summary,
          timestamp: existingCheck.timestamp,
      });
      // existingCheck.summary = aiSummary.summaryText;
      existingCheck.summary = processedResponses;
      await existingCheck.save();
      res.status(200).json({ message: "Updated existing analysis", data: existingCheck });
  }      
  else{
      const aiResult = await SymptomAnalysis({
          userId,
          // summary: aiSummary.summaryText,
          summary:processedResponses,
          history: [],
      });
      aiResult.save();
      res.status(201).json({ message: "New analysis created", data: aiResult });
  }

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: error.message });
  }
});


// get ai anayse response 
app.get("/api/result/:userid", async (req, res) => {
    try {
      const ids = req.params.userid;

      if (!mongoose.Types.ObjectId.isValid(ids)) {
          return res.status(400).json({ message: "Invalid user ID format" });
      }

      const symptoms = await SymptomAnalysis.find({userId:ids});
      // .populate("userId");
      res.status(200).json(symptoms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
