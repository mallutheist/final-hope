const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require('ejs');
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// puuuuuuuuuuuuuuublic.............'//
mongoose.connect("mongodb://127.0.0.1:27017/api", {
    //mongodb://127.0.0.1:27017/api ithinte db, portno okke parse cheyyan aaan useNewUrlParser use cheyyunnath. ath koduthillel old parser kodukkum..ath new version il available alla. so better ath kodukkuka 
});

const articleSchema = {
    name: String,
    title: String
}

const Aricle = mongoose.model("items", articleSchema);

app.get("/articles", (req, res) => {
    Aricle.find()
        .then((found) => {
            res.send(found);
        })
        .catch((err) => {
            console.log("error aanallo" + err)
        })
});

app.get("/articles/:articleTitle", (req, res) => {
    // console.log(req.params)
    Aricle.findOne({ name: req.params.articleTitle })
        .then((articlefound) => {                              //didnt understand anything? 
            res.send(articlefound);                           // goto route "/help"
        })
        .catch((err) => {
            console.log("error aanallo" + err)
        })
})




//this route is ajmal personalised route for help note

app.get("/help", (req, res) => {
    res.render("help")
});


app.listen(9000, () => {
    console.log("server start running")
})