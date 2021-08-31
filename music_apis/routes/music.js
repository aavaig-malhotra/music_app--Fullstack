const express = require('express');
const musicOperations = require('../controllers/music');
const routes = express.Router();
routes.get('/singer', musicOperations.getByArtist);
routes.get('/allsongs', musicOperations.getAllSongs);
routes.post('/addsong', musicOperations.addASong);
routes.delete('/deletesong/:name', musicOperations.removeASong);
// routes.delete('/deletesong/:name', async (req, res) => {
//   console.log(req.params.name);

//   return req.params.id;
// });
// routes.post('/addsong', async (request, response) => {
//   let songObject = request.body;
//   console.log(songObject);
//   const songOperations = require('../db/services/songoperations.js');

//   let result = await songOperations.add(songObject);
//   console.log(result);

//   if (result && result._id) {
//     response.status(200).json({ message: 'Record added' });
//   } else {
//     response.status(200).json({ message: 'Record not added' });
//   }
// });
module.exports = routes;
