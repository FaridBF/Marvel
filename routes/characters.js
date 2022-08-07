const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/characters', async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${req.query.name}&limit=${req.query.limit}&skip=${req.query.skip}`
      )
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
