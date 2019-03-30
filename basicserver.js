var express= require('express');

var app=express();
app
app.get('/',function(req,res)
{
res.send('this is my homepage');
})
app.get('/contact',function(req,res)
{
res.send('this is my contact page');
})
app.listen(3000);
console.log('hey iam listening again');
