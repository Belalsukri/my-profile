const express =require('express')
const fs = require('fs')
const port = process.env.PORT || 4000
const emailSender =require('./modules/emailSend')
const app =express()


app.use(express.static(__dirname + '/public'))
app.use(express.static('node_modules'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.set ('view engine','ejs')
app.set('views',__dirname + '/views');

app.get('/',(req,res)=>{
   
          res.render('index') 
  })
  
  app.post('/send',(req,res)=>{
    
    const name = req.body.name
    const email = req.body.email
   
    const message = req.body.message
    
    emailSender.getEmailAbout(name, email, message , (ok) => {
        if(ok){
           res.json(1)
            
        } else{
            
            res.send('error')
        }
    });
    
    
})

app.listen(port,()=>{
    console.log('it is working on port 4000')
})
