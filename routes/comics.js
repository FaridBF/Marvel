const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/comics', async (req, res) => {
  console.log(req.query);
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${req.query.title}&limit=${req.query.limit}&skip=${req.query.skip}`
      )
      .then((response) => {
        console.log(response);
        res.json(response.data);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get('/comics/:characterId', async (req, res) => {
  console.log(req.params);
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        console.log(response);
        res.json(response.data);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
