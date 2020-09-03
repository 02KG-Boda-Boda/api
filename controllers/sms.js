require("dotenv").config();

const apiKey = process.env.YOUR_API_KEY;
const username = process.env.YOUR_USERNAME;

<<<<<<< HEAD
const apiKey = process.env.YOUR_API_KEY;
const username = process.env.YOUR_USERNAME;

const sendSms = (phone, message) => {
  const Africastalking = require('africastalking')(apiKey, username);
  Africastalking.SMS //client.messages
    .create({
       body: message,
       from: process.env.PHONE_NUMBER,
       to: phone
     })
    .then(message => console.log(message.sid)).catch(err=>{
        console.log(err);
=======

const sendSms = (phone, message) => {
  const AfricasTalking = require("africastalking")({apiKey,username});
  const sms = AfricasTalking.SMS;
  const options = {
    to: [phone],
    message: message,
  };

  sms
    .send(options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
>>>>>>> 2b4f57615991aab8f041d5db490ac51282de6ba6
    });
};

module.exports = sendSms;
