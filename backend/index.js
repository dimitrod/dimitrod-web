const express = require("express");
const nodemailer = require('nodemailer');
const app = express();
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.post('/api/contact', (req, res) => {
  let config = {
    service: 'gmail',    
    auth: {
        user: process.env.GMAIL_APP_USER,
        pass: process.env.GMAIL_APP_PASSWORD 
     },
  }
  
  let transporter = nodemailer.createTransport(config);

  let message = {
    from: 'contact@dimitrod.com', 
    to: 'dimtrod@gmail.com', 
    subject: req.query.subject,
    html: req.query.message + "<br><br><br>From: " + req.query.email
  };
  console.log(req.query);
  console.log(req.params);

  transporter.sendMail(message, (error, info) => {
      if (error) {
          return console.log(error);
      }
      res.status(200).send({ message: "Mail send", message_id: info.messageId });
  });
});