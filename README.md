# 📧 Email Sender App

An automated and customizable email-sending application built with Node.js. It supports plain text and HTML emails, attachments, and integration with email services like SMTP, SendGrid, and Mailgun.

## 🚀 Features

- Send **plain text or HTML** emails.
- Support for **file attachments**.
- Customizable **sender address**, **subject**, and **message body**.
- Send to **multiple recipients** at once.
- **Integration** with email services:
  - SMTP Servers
  - SendGrid
  - Mailgun
- **MongoDB** used for logging sent emails.

## 🛠️ Technologies Used

- **Node.js** with **Nodemailer**
- **SMTP protocol**
- **SendGrid API**
- **Mailgun API**
- **MongoDB** (for storing email logs)

## 📦 Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/email-sender.git
   cd email-sender

    Install Dependencies:

npm install

Create .env file with your credentials:

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

SENDGRID_API_KEY=your_sendgrid_api_key
MAILGUN_API_KEY=your_mailgun_api_key
MAILGUN_DOMAIN=your_mailgun_domain

MONGO_URI=mongodb://localhost:27017/email-logs

Run the Application:

    node index.js

🧩 Applications

    📢 Email marketing campaigns

    🔔 Notification systems

    🤖 Automated communications

📚 Skills Demonstrated

    Working with SMTP and email protocols

    Using Node.js for backend development

    API integration (SendGrid, Mailgun)

    Using MongoDB to log and retrieve email history

📜 License

This project is licensed under the MIT License.
🙌 Contributing

Feel free to fork this repo and open a pull request to contribute. Bug reports and feature requests are welcome!
