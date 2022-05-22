
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
 const publicF = path.join(__dirname,'../public')
app.use(express.static(publicF))
const hbs = require('hbs')
 app.set('view engine', 'hbs');
const vPath = path.join(__dirname,'../templates/views')
app.set('views',vPath)
const request = require('request')


 

app.get('/', (req, res) => {
  res.send('Hello World!')
})



// app.get('/index',(req,res)=>{
//   res.render('index',{
// people: [
//  "esraa",
//  "asmaa",
//  "nour"
// ],
// users :{
//   username:"esraaM",
//   age:23
// }
//   });
// });



 
  
 
 
 
 
 
const url= 'https://newsapi.org/v2/everything?q=tesla&from=2022-04-22&sortBy=publishedAt&apiKey=a66320e2c31d46f59ba9022e1e27404d'
request({url,json:true},(err,res)=>{

  if(err){
    return console.log(err)
  }
     const articles =  res.body.articles
//    publish: "This Article Was Published By "+res.body.articles[0].author ,
//   title:' The Title Of This Article Is ' + res.body.articles[0].title  ,
//   discription :' And Description includes ' + res.body.articles[0].description ,
//  content: ' The Content Of This Article is ' + res.body.articles[0].content,

app.get('/index',(req,res)=>{
  res.render( 'index',{
          articles

  }) 

}) 
  console.log(articles)
 

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})