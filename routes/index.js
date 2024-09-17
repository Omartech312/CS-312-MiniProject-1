//imports express.js
const express = require('express');
//sets the router
const router = express.Router();

// array for posts
  //JS allows arrays to be literally anything which I think its cool
let posts = [];

// renders the homepage which containts the posts
router.get('/', (req, res) => 
{
  //renders the index.ejs with the array of posts
  res.render('index', { posts });
});

// When a post is created pushes the info to the posts array
router.post('/create', (req, res) => 
{
  //sets these values to the body of required components
  const { title, content, author } = req.body;

  //function to get the time of creation
  const creationTime = new Date().toLocaleString(); 

  //pushes title, content, author and the time of creatoin to the array
  posts.push({ title, content, author, creationTime });

  // goes back the main page
  res.redirect('/');
});

//router to delete a post
router.get('/delete/:id', (req, res) => 
{
  //gets the id from the parametes
  const postId = req.params.id;

  //gets the id and based on it removes it from posts
  posts.splice(postId, 1); 

  //goes back to the main page
  res.redirect('/');
});

//router find the correct post to edit
router.get('/edit/:id', (req, res) => 
{
  //gets the id of the post
  const postId = req.params.id;

  //using the id it gets the post
  const post = posts[postId];

  // renders edit to modify the post
  res.render('edit', { post, id: postId });
});

// route for the actual modifying of the post
router.post('/edit/:id', (req, res) => 
{
    //retrieves info from the req
    const postId = req.params.id;

    //sets title, content and author to the new body
    const { title, content, author } = req.body;

    //just pulls the creationTime from post b4 the edit
    const creationTime = posts[postId].creationTime;

    // Changes the content to the new info provided
    posts[postId] = { title, content, author, creationTime };

    //goes back to the main page
    res.redirect('/');
});


module.exports = router;
