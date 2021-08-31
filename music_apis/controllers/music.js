const songOperations = require('../db/services/songoperations');

const musicOperations = {
  async getAllSongs(request, response) {
    const songs = await songOperations.readAll();
    console.log(songs);
    response.json(songs);
  },
  async getByArtist(request, response) {
    const singerName = request.query.name;
    console.log('Singer Name is ', singerName);
    const songs = await songOperations.readBySinger(singerName);
    response.json(songs);
  },
  async addASong(request, response) {
    console.log(request.body);
    const result = await songOperations.add(request.body);

    console.log(result);
    response.status(200).json({ Message: 'Song added' });
  },
  async removeASong(request, response) {
    console.log(request.params.name);
    const songName = request.params.name;
    const result = await songOperations.removeSong(songName);

    const songs = await songOperations.readAll();

    response.status(200).json({ Message: 'Song deleted', songs });
  },
  getPartySongs(request, response) {},
  getLatestSongs(request, response) {},
};
module.exports = musicOperations;
