


var express = require('express');
var router = express.Router();
const {User} = require('../lib/models');


// POST http://localhost:3000/api/v1/users
//     GET http://localhost:3000/api/v1/users/1
//     GET http://localhost:3000/api/v1/users
//     PUT http://localhost:3000/api/v1/users/1
//     DELETE http://localhost:3000/api/v1/users/1
// // CRUD endpoints

// http://localhost:3000/api/v1/users
router.post('/users', async function(req, res, next) {
    console.log('req.body is', req.body);
    // Save this in the database
    // send back the response
    let user = await User.create(req.body);
    res.json(user);
    // res.json({});
});

// GET http://localhost:3000/api/v1/users
router.get('/users', async function(req, res, next) {
    let users = await User.findAll({});
    res.json(users);
});

// GET http://localhost:3000/api/v1/users/1
router.get('/users/:id', async function(req, res, next) {
    console.log(req.params);
    let user = await User.findOne({where: {id: req.params.id}});
    res.json(user);
});

// PUT http://localhost:3000/api/v1/users/1
router.put('/users/:id', async function(req, res, next) {
    console.log('req.params', req.params);
    console.log('req.body', req.body);
    let user = await User.findOne({where: {id: req.params.id}});
    // there could be code here that also runs when a user is updated, or maybe if the users name has changed
    await user.update(req.body);
    // let user = await User.findOne({where: {id: req.params.id}});
    res.json(user);
});

//     DELETE http://localhost:3000/api/v1/users/1
router.delete('/users/:id', async function(req, res, next) {
    console.log('req.params', req.params);
    // let user = await User.findOne({where: {id: req.params.id}});
    // await user.update(req.body);
    // let user = await User.findOne({where: {id: req.params.id}});
    let user = await User.destroy({where: {id: req.params.id}});
    res.json(user);
});


router.get('/', function(req, res, next) {
    res.send('respond with a resource on the /api path');
});


module.exports = router;
