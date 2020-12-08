const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'robotcarnode@gmail.com',
        pass: 'robot123456789'
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