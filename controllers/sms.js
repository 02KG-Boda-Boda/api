require('dotenv').config();

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
    });
}

module.exports = sendSms;
