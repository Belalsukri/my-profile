const nodemailer = require('nodemailer');
require("dotenv").config()
const transporter = nodemailer.createTransport({
    service: process.env.SERVIC,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    }
})
function getEmailAbout(name,email,message,callback) {
    const mailOption ={
        from:  'robotcarnode@gmail.com',
        to: 'robotcarnode@gmail.com',
        subject: name,
        text: name +'\n'+ email+'\n' +  message
    }
    transporter.sendMail(mailOption, function (error, info) {
        if(error){
            console.log(error);
            callback(false);
            
        } else {
            console.log(info.response);
            callback(true);
        }
      })
  }
   
  module.exports = { 
      getEmailAbout
 }