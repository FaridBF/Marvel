const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/characters', async (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${req.query.name}`
      )
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// router.get('/character/:characterId', async (req, res) => {
//   console.log(req.params);
//   try {
//     axios
//       .get(
//         `https://lereacteur-marvel-api.herokuapp.com/character/5fcf91f4d8a2480017b91453?apiKey=${process.env.API_KEY}`
//       )
//       .then((response) => {
//         console.log(response);
//         res.json(response.data);
//       });
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });

module.exports = router;
