const express = require("express");
const { engine } = require('express-handlebars');  // Update for express-handlebars v8.x
const nodemailer = require("nodemailer");
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

    const info = {
        from: `${req.body.name || 'No Name'} <${process.env.EMAIL_USERNAME}>`, // Default to 'No Name' if name is empty
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.content,
        attachments: [
            {
                filename: 'logo.png',
                path: './public/logo.png'
            }
        ],
    };

    // Send email
    transporter.sendMail(info, (err, info) => {
        if (err) {
            console.log("Error: ",err);
            return res.status(500).send({ message: "Failed to send email" });
        } else {
            console.log('Sent: ' + info.response);
            return res.status(200).send({ message: "Email is Sent Successfully😀" });
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
