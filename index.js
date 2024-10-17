//jshint esversion:6

const express = require('express');
const ejs = require('ejs');
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

mongoose
  .connect(
    "mongodb+srv://nedunchezhiyan1010:K7fNvT.HAX9@cluster0.cw74fey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error while connecting to database", err);
  });

const itemsSchema = new mongoose.Schema({
  heading: String,
  description: String
}, { collection: 'blog' });

const Item = mongoose.model('blog', itemsSchema);

const homestart = "Welcome to the Blog website"
const aboutstart = "Find the details about the web page"
const contactstart = "Find the contacts"
let arr = [];

app.get('/', async function (req, res) {
  try {
    const items = await Item.find({});
    res.render('home', {
      homestart: 'Welcome to the Blog website',
      posts: items
    });
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/about', function (req, res) {
  res.render("about",{aboutstart:aboutstart});
});

app.get('/contact', function (req, res) {
  res.render("contact",{contactstart:contactstart});
});

app.get('/compose', function (req, res) {
  res.render("compose");
});

app.post("/compose",function (req,res) {
  
  const content = {
    heading:req.body.heading,
    description:req.body.description
  }
  arr.push(content)

  console.log(arr)
  res.redirect("/")
})

app.get('/posts/:postName', async function (req, res) {
  const requestedTitle = (req.params.postName);
  console.log(requestedTitle)
  const items = await Item.find({});
  console.log(items[0].heading)


  // Use find instead of forEach
  const post = items.find(item => _.replace(_.toLower(item.heading), /\s+/g, '') === requestedTitle);


  if (post) {
    // Redirect or render the matching post
    res.redirect("/about");
  } else {
    // Fallback in case no post is found (e.g., render 404 or another page)
    res.status(404).send('Post not found');
  }
});


app.listen(5000, function () {
  console.log('Server started on port 5000');
});

