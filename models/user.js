const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// !******Password to be updated to not be a direct string******!
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);