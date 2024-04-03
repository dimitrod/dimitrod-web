const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');
const app = express();

// load the .env file 

require('dotenv').config();

app.use(express.json());

// use cross-origin resource sharing, because the frontend and backend run on different ports in the background and Express.js doesnt like this

app.use(cors({

  // to stay safe, only allow cors from these URLs

  origin: ['https://dimitrod.com', 'https://www.dimitrod.com'],
  methods: "POST"

}));

// define and then listen on port 5000 (if there isn't a different PORT variable in .env)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// if there is a POST request at the URL, get the user and pw from the .env file and create a new nodemailer transporter with them

app.post('/api/v1/contact', (req, res) => {
  let config = {
    service: 'gmail',    
    auth: {
        user: process.env.GMAIL_APP_USER,
        pass: process.env.GMAIL_APP_PASSWORD 
     },
  }
  
  let transporter = nodemailer.createTransport(config);

  // then create the message from the query string of the POST request

  let message = {
    from: 'contact@dimitrod.com', 
    to: 'dimtrod@gmail.com', 
    subject: req.query.subject,
    html: "<br><br>This is a message from dimitrod.com: <br><br>" + req.query.message + "<br><br><br>From: " + req.query.email
  };

  // and send the mail - respond with 200 if all is ok, else log the resulting error in the console 
  
  transporter.sendMail(message, (error, info) => {
      if (error) {
          return console.log(error);
      }

      res.status(200).send({ message: "Mail send", message_id: info.messageId });
   
  });
});