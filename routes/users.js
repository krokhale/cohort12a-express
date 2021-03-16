var express = require('express');
var router = express.Router();

/* GET users listing. */
// /users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource on the /users path');
});


// /users/1/john/profile
// /users/2/jane/profile
// /users/3/andy/profile

router.get('/:id/:name/profile', function(req, res, next) {
  console.log('the req.params scanned by the app are', req.params)
  // console.log(req.query)

  // write code to fetch information for johns profile from the database
  // make changes to the data from the db or manipulate it in any way you want
  // finally send back a response to the browser
  res.json({success: true, data: ['a', 'b', 'c']});
});

// try to create a new route
// try to create a new router

// POST /users - This will be a restful way to create a user in the system
router.post('/', function(req, res, next) {

  console.log(req.body)
  // Call the database to create a new row in the table with a new user firstname and lastname
  // once done send back a success response

  res.json({success: true})

})



// API Design Principles

// Dogs
// Dog

// Create a dog
// Update a dog
// Delete a dog
// List all the dogs

// CRUD operations


// HTTP requests

// GET - Get a dog - /dogs/1
// - Get all dogs - /dogs
// PUT - Update a dog - /dogs/1
// POST - Create a dog - /dogs
// DELETE - Delete a dog - /dogs/1

// RESTful design principles





module.exports = router;
