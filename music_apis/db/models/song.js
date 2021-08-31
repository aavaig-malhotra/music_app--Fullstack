const mongoose = require('../connect');
const { Schema, SchemaTypes } = mongoose;
const SongSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  url: { type: Schema.Types.String, required: true },
  artistName: { type: Schema.Types.String, required: true },
  imageurl: { type: Schema.Types.String, required: true },
});
const SongModel = mongoose.model('songs', SongSchema);
module.exports = SongModel;
