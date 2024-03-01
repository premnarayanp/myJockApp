const axios = require('axios');
const Joke = require('../models/jock');
module.exports.jock = async function(req, res) {
    try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
        });

        const jokeData = response.data;
        const savedJoke = await Joke.create({
            jokeId: jokeData.id,
            content: jokeData.joke,
        });

        res.json(savedJoke);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}