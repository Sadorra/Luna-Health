
const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv");

dotenv.config({ path: "./config.env" });

const appointmentRoutes = require("./src/routers/appointmentRouters");
const ratingRoutes = require("./src/routers/ratingRouter");
const symptomRoutes = require("./src/routers/symptomRoutes");
const symptomCheckRoutes = require("./src/routers/symptomCheckRoutes");
const doctorRoutes = require("./src/routers/doctorRoutes");

const app = express();

// Middleware
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/her_health').then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})

// Routes
app.use("/api", appointmentRoutes);
app.use("/api", ratingRoutes);
app.use("/api", symptomRoutes);
app.use("/api", symptomCheckRoutes);
app.use("/api", doctorRoutes);
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




