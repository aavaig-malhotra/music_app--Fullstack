const mongoose = require('../connect');
const { Schema } = mongoose;
const UserSchema = new Schema({
  userid: { type: Schema.Types.String, required: true, unique: true },
  password: { type: Schema.Types.String, required: true, min: 8, max: 25 },
  name: { type: Schema.Types.String },
  admin: { type: Schema.Types.Boolean, default: false },
});
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
