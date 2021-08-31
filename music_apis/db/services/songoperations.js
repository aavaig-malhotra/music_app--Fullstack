const SongModel = require('../models/song');

const songOperations = {
  async add(songObject) {
    const result = await SongModel.create(songObject);

    return result._id;
  },
  async readBySinger(singerName) {
    return await SongModel.find({ artistName: singerName });
  },
  async readAll() {
    return await SongModel.find({});
  },
  async removeSong(songName) {
    return await SongModel.remove({ name: songName });
  },
};
module.exports = songOperations;
