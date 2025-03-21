const mongoose = require("mongoose");

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

module.exports = SymptomAnalysis;