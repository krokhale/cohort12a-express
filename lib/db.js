const {Sequelize} = require('sequelize');
// You can choose to connect to sqlite here if you wish to
// Also, if you are using mysql on your local machine you need to update the credentials below
const sequelize = new Sequelize('mysql://root:password@localhost/cohort12a-express', {logging: false});

//Make sure you run this: npm install sqlite3 --save
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'database.sqlite'
// });


module.exports = {sequelize};
