const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/data");
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const item = mongoose.model("colectaliy", fruitSchema);  //"first" is the collection name. so this is a model of collection as "frist" and schema as "fruitSchema"


var element = new item({
    name: "apple",
    rating: 10
});

var element2 = new item({
    name: "orange",
    rating: 16
});

var element3 = new item({
    name: "grapes",                  
    rating: 14
});

//for inserting elements

// element.save()          //for only one element

//item.insertMany([element,element2,element3]);       //will work but no promises
/*      

item.insertMany([element,element2,element3])                           //corret form
  .then(insertedItems => {
    console.log('Successfully inserted documents:', insertedItems);
  })
  .catch(err => {
    console.error('Error inserting documents:', err);
  });

*/


 //retreiving data from data base

/*
item.find({})
  .then((item) => {
    console.log(item)})
  .catch(err => console.error(err))    */
/*
  item.find({})
  .then((item) => {
    item.forEach((item)=>{
        console.log(item.name)                  //only name
    })
    })
  .catch(err => console.error(err))  */

  //deleting one element

  /*
  item.deleteOne({name:"orange"})
  .then((data)=>{
    console.log("deleted the"+data);
  })
  .catch((err)=>{
    console.log(err);
  })
*/

   //updating one element

   item.updateOne({name:"grapes"},{name : "banana"})
   .then((data)=>{
     console.log("updated the document"+data);          //To updating multiple feilds in same document 
   })                                                  //we can use  $set operator eg :
   .catch((err)=>{                                    // User.updateOne({ _id: '5e80f712097747001421b0f2' }, { $set: { name: 'John Doe', email: 'johndoe@example.com' } })
     console.log(err);
   })
