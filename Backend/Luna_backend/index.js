const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

mongoose.connect('mongodb://localhost:27017/her_health').then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})

dotenv.config({ path: "./config.env" });

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

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
// 
const analyzed_data = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true,
      },
      summary: {
        type: String,
        required : true,
        default:""
     },
    timestamp: {
        type: Date,
        default: Date.now,
      },
    history:[
        {
            summary: {
                type: String,
                required : true,
                default:""
            },
            timestamp: {
                type: Date,
                required : true,
              },
        }
    ]
})
const SymptomAnalysis = mongoose.model("SymptomAnalysis",analyzed_data);

// analyzeSymptomsWithAI = async (processedResponses) => {
//   // Implement your AI analysis logic here
//   const summaryText = "AI-generated summary";
//   const riskLevel = "Medium"; // Adjust this based on your AI's analysis    

//   return { summaryText, riskLevel };    
// }
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


   
app.get("/api/symptoms/:id", async (req, res) => {
  try {
    const ids = req.params.id;
    const symptoms = await Symptom.find({_id:ids});
    res.status(200).json(symptoms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/symptoms/", async (req, res) => {
  try {
    const symptoms = await Symptom.find({});
    res.status(200).json(symptoms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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

//doctors schema
const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  meeting: { type: String, 
    enum :['inperson', 'online'],
    
    required: true },
  date: { type: String, required: true },
 status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

const doctorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    discription:{
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
   location: {
      type: String,
      required: true
    },
    ratings: {
      type: Number,
    }
})
 
// create a doctor

const doctor = mongoose.model("doctor", doctorsSchema);

const addNewDoctor = async (name, email, specialization, discription, location,ratings) => {
  try {
    const newUser = new doctor({ name, email,specialization, discription, location,ratings });
    await newUser.save();
    console.log("User added:", newUser);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

// get doctors api
app.get("/doctors", async (req, res) => {
  try {
    const doctors = await doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error getting doctors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

// send user send email to doctor 

app.post("/api/send-email", async (req, res) => {
  try {
    const { userId, doctorId, meeting, date } = req.body;

    // Validate User
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Validate Doctor
    const doc = await doctor.findById(doctorId);
    if (!doc) return res.status(404).json({ message: "Doctor not found" });

    // Save appointment in DB
    const newAppointment = new Appointment({ userId, doctorId, meeting, date });
    await newAppointment.save();

    // Email content to Doctor
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: doc.email,
      subject: "Booking Appointment Request",
      text: `Dear ${doc.name},\n\nYou have a new appointment request.\n\nMeeting: ${meeting}\nDate: ${date}\nBooked by: ${user.name} (${user.email})\n\nPlease respond by clicking:\n\nAccept: http://localhost:3001/api/respond-appointment?appointmentId=${newAppointment._id}&response=Accepted\nReject: http://localhost:3001/api/respond-appointment?appointmentId=${newAppointment._id}&response=Rejected\n\nBest Regards,\nLuna Health`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error.message);
    res.status(500).json({ message: "Failed to send email" });
  }
});




app.get("/api/respond-appointment", async (req, res) => {
  try {
    const { appointmentId, response } = req.query;

    // Validate Response
    if (!["Accepted", "Rejected"].includes(response)) {
      return res.status(400).json({ message: "Invalid response. Use 'Accepted' or 'Rejected'." });
    }

    // Find Appointment
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    // Update Status
    appointment.status = response;
    await appointment.save();

    // Fetch user details
    const user = await User.findById(appointment.userId);
    const doctor = await Doctor.findById(appointment.doctorId);

    if (!user || !doctor) return res.status(404).json({ message: "User or Doctor not found" });

    // Email content to User
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: `Appointment ${response}`,
      text: `Dear ${user.name},\n\nYour appointment request for '${appointment.meeting}' on ${appointment.date} with Dr. ${doctor.name} has been ${response}.\n\nBest Regards,\nLuna Health`,
    };

    // Send email to User
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: `Appointment ${response} and email sent to user.` });
  } catch (error) {
    console.error("Response Error:", error.message);
    res.status(500).json({ message: "Failed to process response" });
  }
});
