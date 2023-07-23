const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
id: { type: String, required: true, unique: true },
name: { type: String },
bot: { type: Boolean},
announcement: { type: String },
permit: { type: String,  default: "false"},
afk:{ type: String,  default: "false"},
afktime: { type: Number,  default: 0 },
times: { type: Number,  default: 0 },
ban: { type: String,  default: "false"},
haig: { type: String,  default: "false"},
lastmsg: { type: String ,  default: ''},
lastchat: { type: String ,  default:'' },
spamCount: { type: Number ,  default: 0},
})
const khadherinc =  mongoose.model("khadherinc", UserSchema)
module.exports = { khadherinc }
