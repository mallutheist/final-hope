const express = require ('express');
const bodyParser = require('body-parser');

var app = express();



app.set("view engine","ejs");

var daytext=""
app.get("/" , function(req,res){
var d = new Date();
var day = d.getDay();

if(day==6 || day==0)
daytext= "weekend";
else
    daytext="weekday";


res.render("list", {daytext}); 

})

app.listen(3000, function(){
    console.log('server started running');
})