const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser: true });


// Creating Mongoose Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data enrty, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Creating models(Collections)

const Fruit = mongoose.model("Fruit", fruitSchema);// Fruit-->fruits : i.e it makes use of "lodash" module.

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as fruit."
});
// fruit.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 45
});

// person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit."
});

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour for me."
});

const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird texture."
});



// Insert Many into the collection "fruits"

// Fruit.insertMany([kiwi, orange, banana]).then(function () {
//     console.log("Success");
// }).catch(function (err) {
//     console.log(err);
// });


// Reading collections : "fruits" 

// Fruit.find().then(function (fruits){
//     fruits.forEach(function (fruit,index){
//         console.log(fruits[index].name);
//     });
// }).catch(function (err){
//     console.log(err);
// });


// OR 

// Fruit.find().then(function (fruits) {

//     mongoose.connection.close();
//     fruits.forEach(function (fruit) {
//         console.log(fruit.name);
//     });
// }).catch(function (err) {
//     console.log(err);
// });


// OR 

// Fruit.forEach(function (fruit,index){
//     console.log(fruit[index].name);
// });


// UPDATING THE DOCUMENT

// Fruit.updateOne({review: 'Amazing taste'},{name: "Peach"}).then(function(){

//     mongoose.connection.close();
//     console.log("Successfully updated the document.");
// }).catch(function(err){
//     console.log(err);
// });



// DELETING THE PARTICULAR DOCUMENT..


Fruit.deleteOne({ review: 'Amazing taste' }).then(function () {

    mongoose.connection.close();
    console.log("Successfully deleted the document.");
}).catch(function (err) {
    console.log(err);
});