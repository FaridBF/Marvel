const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/comics', async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get('/comics/:characterId', async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
