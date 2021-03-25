const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
// ORM

// thetodo: Create a model for a dog

class User extends Model {

}

User.init({
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    // lastName: {
    //     type: DataTypes.STRING,
    //     // allowNull: false
    // },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
});




class Todo extends Model {

}

Todo.init({
    // Model attributes are defined here
    itemTxt: {
        type: 'LONGTEXT'
        // allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN
        // allowNull: false
    },
    // lastName: {
    //     type: DataTypes.STRING,
    //     // allowNull: false
    // },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Todo', // We need to choose the model name
});





sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequelize.sync({force: true});
// }

module.exports = {
    // Portfolio, Wallet
    User,
    Todo
};
