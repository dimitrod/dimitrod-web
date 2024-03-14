const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors());

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
    html: "<br><br>This is a message from dimitrod.com: <br><br>" + req.query.message + "<br><br><br>From: " + req.query.email
  };

  transporter.sendMail(message, (error, info) => {
      if (error) {
          return console.log(error);
      }

      res.status(200).send({ message: "Mail send", message_id: info.messageId });
   
  });
});