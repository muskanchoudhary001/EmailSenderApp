const mongoose = require('mongoose')



const emailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;