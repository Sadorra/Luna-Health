const nodemailer = require("nodemailer");
const dotenv=require("dotenv");

dotenv.config({ path: "./config.env" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

module.exports = transporter;
