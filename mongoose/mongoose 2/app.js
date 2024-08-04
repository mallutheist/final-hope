const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/person");

const fruitsSchema = new mongoose.Schema({
name : String,
rating : Number
});

const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
    fav : fruitsSchema
    });

    const item = mongoose.model("fruitcol", fruitsSchema);
    const pers = mongoose.model("personcol", personSchema);

    const grapes = new item({
        name : "cherry",
        rating : 9
    });

    grapes.save();

    const person1 = new pers({
        name:"majeed",
        age : "2",
        fav : grapes
    })

    person1.save();