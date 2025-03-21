const Appointment = require("../models/Appointment");
const User = require("../models/User");
const Doctor = require("../models/Doctor");
const transporter = require("../config/emailConfig");

// Send Email to Doctor & Save Appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { userId, doctorId, meeting, date } = req.body;

        // Validate User
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Validate Doctor
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });

        // Save appointment in DB
        const newAppointment = new Appointment({ userId, doctorId, meeting, date });
        await newAppointment.save();

        // Email content to Doctor
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: doctor.email,
            subject: "Booking Appointment Request",
            text: `Dear Dr. ${doctor.name},\n\nYou have a new appointment request.\n\nMeeting: ${meeting}\nDate: ${date}\nBooked by: ${user.name} (${user.email})\n\nPlease respond:\nAccept: http://localhost:3001/api/respond-appointment?appointmentId=${newAppointment._id}&response=Accepted\nReject: http://localhost:3001/api/respond-appointment?appointmentId=${newAppointment._id}&response=Rejected\n\nBest Regards,\nLuna Health`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Email Error:", error.message);
        res.status(500).json({ message: "Failed to send email" });
    }
};

// Doctor Responds to Appointment Request
exports.respondToAppointment = async (req, res) => {
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
            text: `Dear ${user.name},\n\nYour appointment for '${appointment.meeting}' on ${appointment.date} with Dr. ${doctor.name} has been ${response}.\n\nBest Regards,\nLuna Health`,
        };

        // Send email to User
        await transporter.sendMail(userMailOptions);
        res.status(200).json({ message: `Appointment ${response} and email sent to user.` });
    } catch (error) {
        console.error("Response Error:", error.message);
        res.status(500).json({ message: "Failed to process response" });
    }
};
