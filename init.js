// const mongoose = require('mongoose');
// const { v4 : uuidv4} = require('uuid');
// const tweets = require('./models/tweet');

// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/twitter');
// }

// main()
// .then(() => console.log("MONGO CONNECTION OPEN"))
// .catch(err => console.log(err));

// tweets.insertMany([
//     {
//        id : uuidv4() ,
//        username : "krish patel",
//        post : "hello world",
//     },
//     {
//        id : uuidv4() , 
//        username : "Donald trump",
//        post : "hello from donald trump",
//     },
//     {
//         id : uuidv4() ,
//        username : "modi ji ",
//        post : "hello from modi ji",
//     }
// ]);