'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('users', [
            {username: 'Dhroov7', name: 'Dhroov Gupta', email: 'dhroovgupta7@gmail.com', city: 'New Delhi', createdAt: new Date(), updatedAt: new Date()},
            {username: 'Div.wayne', name: 'Divyansh Jain', email: 'div.wayne@gamil.com', city: 'Hyderabad', createdAt: new Date(), updatedAt: new Date()},
            {username: 'championswimmer', name: 'Arnav Gupta', email: 'arnav@cb.lk', city: 'New Delhi', createdAt: new Date(), updatedAt: new Date()},
            {username: 'witty123', name: 'Varun Hasija', email: 'varun@cb.lk', city: 'Banglore', createdAt: new Date(), updatedAt: new Date()},
            {username: 'theradbrad', name: 'Brad', email: 'radbrad@gmail.com', city: 'LA', createdAt: new Date(), updatedAt: new Date()},
            {username: 'dhroov', name: 'Dhroov Gupta', email: 'dhroov15ecu016@ncuindia.edu', city: 'Banglore', createdAt: new Date(), updatedAt: new Date()},
        ])
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('users', null, {})
    }
};
