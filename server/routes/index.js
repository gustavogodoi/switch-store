const express = require('express');
const router = express.Router();
const axios = require('axios');
let referenceList = null;

router.get('/games', async (req, res, next) => {
  const response = await axios.get(
    `https://www.nintendo.com/json/content/get/filter/game?limit=400&system=switch&sort=title&direction=asc`
  );
  const { data } = response;
  res.setHeader('Content-Type', 'application/json');
  res.send(data.games.game);
});

module.exports = router;
