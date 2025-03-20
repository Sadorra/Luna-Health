const Doctor = require("../models/Doctor");

exports.rateDoctor = async (req, res) => {
    try {
        const { userId, doctorId, rating, comment } = req.body;

        if (!userId || !doctorId || !rating) {
            return res.status(400).json({ message: "User ID, Doctor ID, and Rating are required" });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: "Rating must be between 1 and 5" });
        }

        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        // Check if user already rated
        const existingReview = doctor.reviews.find(review => review.userId.toString() === userId);

        if (existingReview) {
            // Update existing rating
            existingReview.rating = rating;
            existingReview.comment = comment || existingReview.comment;
        } else {
            // Add new rating
            doctor.reviews.push({ userId, rating, comment });
        }

        // Recalculate the average rating
        const totalRatings = doctor.reviews.length;
        const sumRatings = doctor.reviews.reduce((acc, review) => acc + review.rating, 0);
        doctor.ratings = sumRatings / totalRatings;

        // Save doctor with updated ratings
        await doctor.save();
        res.status(200).json({ message: "Doctor rated successfully", doctor });
    } catch (error) {
        console.error("Error rating doctor:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
