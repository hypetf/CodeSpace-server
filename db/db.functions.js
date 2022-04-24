const mongoose = require('mongoose');
const userSchema = require('./models/user.schema');

async function saveNewUser(userObj) {
    try {
        userSchema.findOne({
            userID: userObj.userID,
            }, async(err, result) => {
            if(err) throw err
            if(!result) {
                const newUser = new userSchema({
                    _id: mongoose.Types.ObjectId(),
                    userID: userObj.userID,
                    username: userObj.username,
                    avatar: userObj.avatar,
                    provider: userObj.provider
                });
                await newUser.save();
                return newUser;
            }
            else {
                await userSchema.findOneAndUpdate({
                    userID: userObj.userID
                }, {
                    username: userObj.username,
                    avatar: userObj.avatar,
                    provider: userObj.provider
                });
                return result;
            }
        });
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function getMemberData(userID) {
    await userSchema.findOne({
        userID: userID
    }, async(err, result) => {
        if(err) throw err;
        if(!result) {
            return new Error('User not found. | GET');
        }
        else {
            let memberData = {
                userID: result.userID,
                username: result.username,
                avatar: result.avatar,
                provider: result.provider
            }
            return memberData;
        }
    });
}

module.exports = {
    saveNewUser,
    getMemberData
}