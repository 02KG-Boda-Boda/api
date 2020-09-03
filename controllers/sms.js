require("dotenv").config();

const apiKey = process.env.YOUR_API_KEY;
const username = process.env.YOUR_USERNAME;


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
    });
};

module.exports = sendSms;
