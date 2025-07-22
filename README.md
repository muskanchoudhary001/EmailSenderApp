# 📧 Email Sender App

An automated and customizable email-sending application built with Node.js. It supports plain text and HTML emails, attachments, and integration with email services like SMTP, SendGrid, and Mailgun.

---

## 🚀 Features

- Send plain text or HTML emails.
- Support for file attachments.
- Customizable sender address, subject, and message body.
- Send to multiple recipients at once.
- Integration with email services:
  - SMTP Servers
  - SendGrid
  - Mailgun
- MongoDB used for logging sent emails.

---

## 🛠️ Technologies Used

- Node.js with Nodemailer
- SMTP protocol
- SendGrid API
- Mailgun API
- MongoDB (for storing email logs)

---

## 📦 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/email-sender.git
cd email-sender
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create .env File with Your Credentials

See the .env format below for required variables.

### 🔐 Environment Variables (.env)

Create a .env file in the root directory with the following variables:

```bash
# App Port
PORT=5000

# Default Email Credentials (used for SMTP or Gmail)
EMAIL_USERNAME=your gmail username
EMAIL_PASSWORD=your_app_specific_password_or_generated_key

# SMTP Configuration (if using SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

 

# MongoDB URI for storing logs
MONGO_URI=mongodb://localhost:27017/email-logs

```

***⚠️ Note: If you're using Gmail, generate an App Password from your Google Account (2FA must be enabled).***

### 4️⃣ Run the Application

```bash
node index.js/app.js
```

---

## 🧩 Applications

- 📢 Email marketing campaigns

- 🔔 Notification systems

- 🤖 Automated communications

---

## 📚 Skills Demonstrated

    Working with SMTP and email protocols

    Using Node.js for backend development

    API integration (SendGrid, Mailgun)

    Using MongoDB to log and retrieve email history

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Contributing

Feel free to fork this repo and open a pull request to contribute. Bug reports and feature requests are welcome!

---
