const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/her_health').then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User=new mongoose.model("User",userSchema);   


const symptomSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["Breast Cancer", "PCOS", "Endometriosis", "Ovarian Cancer", "Cervical Cancer"],
    required: true,
  },
  questions: [
    {
      question: { type: String, required: true },
      type: {
        type: String,
        enum: ["boolean", "text", "multiple_choice", "number"],
        required: true,
      },
      options: [String], // Only for multiple_choice type
    },
  ],
});

const Symptom = mongoose.model("Symptom", symptomSchema);


const symptomCheckSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    enum: ["Breast Cancer", "PCOS", "Endometriosis", "Ovarian Cancer", "Cervical Cancer"],
    required: true,
  },
  responses: [
    {
      question_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Symptom.questions",
        required: true,
      },
      answer: mongoose.Schema.Types.Mixed, // Can store Boolean, String, or Array
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const SymptomCheck = mongoose.model("SymptomCheck", symptomCheckSchema);




// Store all symptom-related questions



// add questions based on catagory
// const addNewQuestion = async (category, questionText, type, options = []) => {
//   try {
//     const updatedCategory = await Symptom.findOneAndUpdate(
//       { category }, // Find the category if it exists
//       {
//         $push: { questions: { question: questionText, type, options } }, // Append the new question
//       },
//       { new: true, upsert: true } // Create if not exists, return updated document
//     );

//     console.log("Question added:", updatedCategory);
//   } catch (error) {
//     console.error("Error adding question:", error);
//   }
// };

// add new user 
// const addNewUser = async (name, email, password) => {
//   try {
//     const newUser = new User({ name, email, password });
//     await newUser.save();
//     console.log("User added:", newUser);
//   } catch (error) {
//     console.error("Error adding user:", error);
//   }
// }














// Example Usa
// ask about obesity








// module.exports = { Symptom, SymptomCheck };































const analyzed_data = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true,
      },
      summary: {
        type: String,
        // required : true,
        default:""
    },
    // riskLevel: {
    //     type: String,
    //     default: "Low",
    // },
    timestamp: {
        type: Date,
        default: Date.now,
      },
    history:[
        {
            summary: {
                type: String,
                // required : true,
                default:""
        
            },
            riskLevel: {
                type: String,
                default: "Low",
            },
            timestamp: {
                type: Date,
                default: Date.now,
              },
        }
    ]
})

// analyzeSymptomsWithAI = async (processedResponses) => {
//   // Implement your AI analysis logic here
//   const summaryText = "AI-generated summary";
//   const riskLevel = "Medium"; // Adjust this based on your AI's analysis    

//   return { summaryText, riskLevel };    
// }

// const SymptomCheck = mongoose.model("SymptomCheck", symptomCheckSchema);
// const symptoms = mongoose.model("symptoms",symptom);
// const SymptomAnalysis = mongoose.model("SymptomAnalysis",analyzed_data);





const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is running on port 3000"));

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

        return { question_id: qn.question_id, answer: qn.answer };
      });

  
  
    const newEntry = new SymptomCheck({
      userId,
      category,
      responses: formattedResponses,
    });


    // to add to database
    await newEntry.save();



    res.status(201).json({ message: "Data saved successfully", data: newEntry });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: error.message });
  }
});


    // processedResponses.forEach((response) => {
    //     const summary = response.questions.reduce((acc, question) => {
    //       if (question.answer) {
    //         acc.push(question.question);
    //       }
    //       return acc;
    //     })
    //     SymptomAnalysis.create({
    //         userId:userId,
    //         symptoms:summary,
    //     })
    //   });
   
    
    // // Store responses temporarily
    // const newCheck = await SymptomCheck.create({
    //       userId,
    //       responses: processedResponses,
    //     });
        
    //     // Send data to AI for analysis
    //     const aiSummary = await analyzeSymptomsWithAI(processedResponses);
        
    //     // Store AI-generated summary in a separate collection
    //     const existingCheck = await SymptomAnalysis.findOne({ userId });
    // // Update existing check with AI-generated summary
    // if (existingCheck) {
    //     if (!existingCheck.history) {
    //         existingCheck.history = [];
    //     }
    //     existingCheck.history.push({
    //         summary: existingCheck.summary,
    //         riskLevel: existingCheck.riskLevel,
    //         timestamp: existingCheck.timestamp,
    //     });
    //     existingCheck.summary = aiSummary.summaryText;
    //     existingCheck.riskLevel = aiSummary.riskLevel;
    //     await existingCheck.save();
    //     res.status(200).json({ message: "Updated existing analysis", data: existingCheck });
    // }      
    // else{
    //     const aiResult = await SymptomAnalysis.create({
    //         userId,
    //         summary: aiSummary.summaryText,
    //         riskLevel: aiSummary.riskLevel,
    //         history: [],
    //     });
    //     res.status(201).json({ message: "New analysis created", data: aiResult });
    // }


    // // Delete raw responses after AI processing
    // // await SymptomCheck.deleteOne({ _id: newCheck._id });

    // res.status(201).json({
    //   message: "Data analyzed successfully",
    //   analysis: aiResult,
    // });
    // const checked =users.map(item => {item.userId===userId})





// // module.exports = router;

// // get symptoms the questionaries 
// app.get("/api/symptoms/:id", async (req, res) => {

//   try {
//     const ids = req.params.id;
//     const symptoms = await SymptomCheck.find({_id:ids});
//     res.status(200).json(symptoms);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// app.get("/api/result/:userid", async (req, res) => {
//     try {
//       const ids = req.params.userid;
//       const symptoms = await SymptomAnalysis.find({userId:ids}).populate("userId");
//       res.status(200).json(symptoms);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

//  serach history based of date
// app.get("/api/result/:userid", async (req, res) => {
//     try {
//         const { userid } = req.params;
//         let { startDate, endDate } = req.query;

//         // Validate userId format
//         if (!mongoose.Types.ObjectId.isValid(userid)) {
//             return res.status(400).json({ message: "Invalid user ID format" });
//         }

//         // Convert dates to ISO format for comparison
//         let dateFilter = {};
//         if (startDate || endDate) {
//             dateFilter.timestamp = {};
//             if (startDate) dateFilter.timestamp.$gte = new Date(startDate);
//             if (endDate) dateFilter.timestamp.$lte = new Date(endDate);
//         }

//         // Fetch data filtered by userId and optional date range
//         const symptoms = await SymptomAnalysis.find({
//             userId: userid,
//             ...dateFilter,
//         }).populate("userId");

//         if (!symptoms.length) {
//             return res.status(404).json({ message: "No records found for this user in the given date range" });
//         }

//         res.status(200).json(symptoms);
//     } catch (error) {
//         console.error("Error fetching user history:", error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });


 

// app.get("/api/result/:userid", async (req, res) => {
//     try {
//         const ids = req.params.userid;

//         // Convert userId to ObjectId if needed
//         if (!mongoose.Types.ObjectId.isValid(ids)) {
//             return res.status(400).json({ message: "Invalid user ID format" });
//         }

//         const symptoms = await SymptomAnalysis.find({ userId: ids }).populate("userId");

//         if (!symptoms.length) {
//             return res.status(404).json({ message: "No symptom analysis found for this user" });
//         }

//         res.status(200).json(symptoms);
//     } catch (error) {
//         console.error("Error fetching user results:", error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });


  





