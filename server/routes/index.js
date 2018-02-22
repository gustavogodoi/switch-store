const express = require('express');
const router = express.Router();
const axios = require('axios');
const request = require('request');
const MongoClient = require('mongodb').MongoClient;

const uri =
  'mongodb+srv://gustavo:mjr2BsAezvfUaeby@cluster0-yd5eh.mongodb.net/test';

function getGames(url, offset, games) {
  offset = offset || 0;
  games = games || [];

  return new Promise((resolve, reject) => {
    request.get(
      {
        url: url,
        qs: {
          limit: 200,
          offset: offset,
        },
      },
      (err, res, body) => {
        if (err) return reject(err);

        let filteredResponse = JSON.parse(body);
        let accumulatedGames = games.concat(filteredResponse.games.game);
        if (
          filteredResponse.games.game.length + offset <
          filteredResponse.filter.total
        ) {
          getGames(url, offset + 200, accumulatedGames)
            .then(resolve)
            .catch(reject);
        } else {
          return resolve(accumulatedGames);
        }
      }
    );
  });
}

router.get('/update/games', async (req, res, next) => {
  const response = getGames(
    'https://www.nintendo.com/json/content/get/filter/game?limit=20&system=switch&sort=title&direction=asc'
  );
  response.then(games => {
    MongoClient.connect(uri, function(err, client) {
      const collection = client.db('switch-store').collection('games');
      try {
        collection
          .insertMany(games, { ordered: false })
          .catch(e => console.log('ERROR!!: ', e.message));
      } catch (e) {
        console.error(e);
      }
      client.close();
    });
    res.setHeader('Content-Type', 'application/json');
    res.send(games);
  });
});

router.get('/games', async (req, res, next) => {
  const response = await axios.get(
    `https://www.nintendo.com/json/content/get/filter/game?limit=400&system=switch&sort=title&direction=asc&shop=retail`
  );
  const { data } = response;
  res.setHeader('Content-Type', 'application/json');
  res.send(data.games.game);
});

module.exports = router;
