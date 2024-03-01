const axios = require('axios');
const Joke = require('../models/jock');
module.exports.favorite = async function(req, res) {
    try {
        const favorites = await Joke.findAll();
        //res.json(favorites);
        return res.render('myFavorite', {
            title: 'favorite',
            heading: 'this is  Favorite',
            favorite: favorites
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}