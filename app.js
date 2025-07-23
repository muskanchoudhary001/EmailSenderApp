const express = require("express");
const { engine } = require('express-handlebars');  // Update for express-handlebars v8.x
const nodemailer = require("nodemailer");
const mongoose = require('mongoose')
const Email = require('./models/Email')
const path = require("path");
require('dotenv').config({ path: './.env' });

const app = express();

// Template Engine for express-handlebars v8.x
app.engine('handlebars', engine({ defaultLayout: 'main' }));  // Use 'engine()' method
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body parser middleware (no need for `body-parser` in Express v5.x)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//mongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB connected!!")
    })
    .catch(err => console.log(err))

// Routes
app.get("/", (req, res) => {
    res.render('index');
});

app.post('/send-email', async (req, res) => {
    // Nodemailer Transporter setup for v7.x
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const { name, email, subject, content } = req.body;

    const info = {
        from: `${name || 'No Name'} <${process.env.EMAIL_USERNAME}>`, // Default to 'No Name' if name is empty
        to: email,
        subject: subject,
        text: content,
        attachments: [
            {
                filename: 'logo.png',
                path: './assets/logo.png'
            }
        ],
    };

    // Send email
    try {
        const emailResponse = await transporter.sendMail(info);

        const emailData = new Email({
            name,
            email,
            subject,
            content
        })

        await emailData.save(); //save to mongoDB
        console.log("Email Data Saved to DB:", emailData);


        return res.status(200).send({
            message: "Email is Sent Successfully😀"
        })

    } catch (err) {
        console.error("Error: ", err);
        return res.status(500).send({
            message: "Failed to send email"
        })
    }

});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
