const express = require('express');
const bodyParser = require("body-parser");
var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/todolist");

const tyrSchema = new mongoose.Schema({
    name: String
});

const item = mongoose.model("col1", tyrSchema);
//    const todo = new item({
//  name: 'create some videos'
//    });

// todo.save(); 

app.get("/", (req, res) => {

    item.find({})
        .then((founditem) => {
            res.render("list", { ejes: founditem })
        })
        .catch((err) => {
            console.log("there is an error" + err)
        })

})

app.post("/", (req, res) => {

    const itemname = req.body.ele1

    var todo1 = new item({
        name: itemname
    })
    todo1.save();

    res.redirect("/")
})

app.post("/delete",(req,res)=>{
    const checkeditem = req.body.checkbox;
    item.findByIdAndDelete(checkeditem)
    .then((data)=>{
        console.log("checked item deleted");
        res.redirect("/");
    })
    .catch((err)=>{
        console.log("not deleted there is some error ");
    })
})


app.listen(8000, () => {
    console.log('server start running')
});


