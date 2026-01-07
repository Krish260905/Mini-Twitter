const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const methodOverride = require("method-override");
const mongoose = require('mongoose');
const tweets = require('./models/tweet');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/twitter');
}

main()
.then(() => console.log("MONGO CONNECTION OPEN"))
.catch(err => console.log(err));

app.use(methodOverride("_method"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/tweets', async (req, res) => {
    let tweet = await tweets.find()
    res.render("index.ejs", {tweet});
});

app.get("/tweets/new", (req, res) =>{
    res.render("new.ejs");
});

app.post("/tweets", async (req,res) =>{
    let {username , post } = req.body;
    let newTweet = new tweets({ 
        username: username, 
        post: post,
        created_at: new Date()
    });
    await newTweet.save();
    res.redirect("/tweets");
});
    
app.get("/tweets/:id", async (req, res) => {
        let { id } = req.params;
        let tweet = await tweets.findById(id);
        res.render("show.ejs", { tweet });
});

    
// for update

app.put("/tweets/:id",async (req,res) =>{
    let {id} = req.params;
    let Newtweet = req.body.post;
    let tweet = await tweets.findByIdAndUpdate(id, {post: Newtweet, updated_at: new Date()}, {runValidators: true, new: true});
    res.redirect("/tweets");
});

app.get("/tweets/:id/edit",async (req,res) => {
    let {id} = req.params;
    let tweet = await tweets.findById(id);
    res.render("edit.ejs", {tweet});
});

// for delete 

app.delete("/tweets/:id" , async (req,res) =>{
    let {id} = req.params;
    await tweets.findByIdAndDelete(id)
    res.redirect("/tweets");
});

// for back button
app.post("/tweets/:id", (req,res) =>{
    res.redirect("/tweets");
});