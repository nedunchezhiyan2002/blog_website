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

mongoose.connect("mongodb://0.0.0.0:27017/blogdb").then(() => {
  console.log("database connected")}).catch((err) => {
  console.log("error while connecting to database",err)
})

const itemsSchema = new mongoose.Schema({
  heading: String,
  description: String
}, { collection: 'blog' });

const Item = mongoose.model('blog', itemsSchema);


const item1 = new Item();

const newArray = [
  { heading: 'Array Item 1', description: 'Description 1' },
  { heading: 'Array Item 2', description: 'Description 2' },
  { heading: 'Array Item 3', description: 'Description 3' }
];

async function insertArray() {
  try {
    const result = await Item.insertMany(newArray);
    console.log('Array inserted successfully');
  } catch (error) {
    console.error('Error inserting array:', error);
  }
}

// Call the function to insert the array
insertArray();

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

const saveItem = async () => {
  try {
    await item1.save();
    console.log("Item saved successfully");
  } catch (error) {
    console.error("Error saving item:", error);
  } 
};

saveItem();

app.get('/posts/:postName',function (req,res) {
  var requestedTitle = _.lowerCase(req.params.postName);
  arr.forEach(post=> {
    const storedTitle = _.lowerCase(post.heading);

    if (storedTitle === requestedTitle) {
      console.log("match founded")
    }
  });
})

app.listen(3000, function () {
  console.log('Server started on port 3000');
});

