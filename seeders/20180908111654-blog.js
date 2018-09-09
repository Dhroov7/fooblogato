'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('blogs', [
            {title: 'first', description: 'some description', treat: 0, createdAt: new Date(), updatedAt: new Date()},
            {title: 'second', description: 'some description', treat: 1, createdAt: new Date(), updatedAt: new Date()},
            {title: 'third', description: 'some description', treat: 2, createdAt: new Date(), updatedAt: new Date()},
            {title: 'fourth', description: 'some description', treat: 3, createdAt: new Date(), updatedAt: new Date()},
            {title: 'fifth', description: 'some description', treat: 4, createdAt: new Date(), updatedAt: new Date()},
            {title: 'sixth', description: 'some description', treat: 5, createdAt: new Date(), updatedAt: new Date()},
            {title: 'seven', description: 'some description', treat: 6, createdAt: new Date(), updatedAt: new Date()}
        ])
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('blogs', null, {});
    }
};
