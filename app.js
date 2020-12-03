const express =require('express')
const app =express()
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static('node_modules'))
app.set ('view engine','ejs')
app.set('views',__dirname + '/views');

const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
          res.render('index') 
  })

app.listen(port,()=>{
    console.log('it is working on port 4000')
})
