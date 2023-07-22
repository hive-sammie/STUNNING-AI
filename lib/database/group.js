const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "true" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: `*Hey @user @pp Welcome in @gname.....!!!!!😊♥️* \n*Group Members : @count th_*\n\n*_Note : Follow the Group rules Otherwise you'll be Kicked_*\n *________________________*\n`},
goodbye:{ type: String, default: `*@user @pp Left From @gname.....!!!!!😒♥️* \n*_Group Members : @count th_*\n\n *________________________*\n` },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "false" },
antispam: { type: String, default: "false" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck } 
