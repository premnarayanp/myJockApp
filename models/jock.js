// server/models/Joke.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Joke = sequelize.define('Joke', {
    jokeId: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Joke;