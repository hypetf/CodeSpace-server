const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: Number,
    username: String,
    avatar: String,
    provider: String
})

module.exports = mongoose.model("users", userSchema);

/*

    USER TYPES
    ------------------
    0 => ADMIN
    1 => MOD
    2 => MEMBER
    ------------------

*/