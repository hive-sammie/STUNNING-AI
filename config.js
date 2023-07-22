const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '917560920774' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://levela6788:khaddki77@botsss.3mvlblp.mongodb.net/?retryWrites=true&w=majority" ;
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363023983262391@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363022922797633@g.us' ;
global.email = 'abdkhadher123@gmail.com' ;
global.github = 'https://github.com/Khadher555/STUNNING-AI' ;
global.location = 'Lahore Pakistan' ;
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi'
global.gurl = 'https://instagram.com/abd_khadher___' ; // add your username
global.sudo =  process.env.SUDO || "917560920774" ;
global.devs = "917560920774"; //Dont change it From here
global.website = 'wa.me/917560920774' ; //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://imgur.com/a/Mg41VUV' ;
module.exports = {
  sessionName: process.env.SESSION_ID || 'khadher.inc;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic04zQUlySHRrU0RqYk5Ma2lOMlo2cCtPS0V2R241Y2RIRW9oUENSeVJWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiendJMEhxQ3J2N01FblFSc2VIZDR2c3kzTkRPOGFvQUN2N3IwaGpudUcxWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR2pDUUxXQllYWkJzYjVXNXpzRys2cGJCUXA3Tnh3c3MyMWJQc2V4WTJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxQmYvVUVYdnNZMGV2V3Q0WS9mM2JSZ1FaVWxQVWNUWmwxVGZlWnZ3OWg4PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHNkJjK2RuMGozY1czUVBWM1FycUVUamlIV1lXMXBWTHd6NlVzdjFpM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ2eDJ5N2pvWURqLzBWZjlzenhRdjMwZktkbksybWNJaFVoMjRXUmpvaUE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrVEFKbjE2STkxQzFtclpvNXJjaVlYMk5BUG9tL2Ryb0lqNHBWcDAwNG5SNzhIZURZd3h1RGw4dWFlTU9tZ1dKTlBLNDV0bU5Sa2hGTkxzV3NVSFdnZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3NywiYWR2U2VjcmV0S2V5IjoiZ3dDSG5BZHFCb25CN1RSampQbWVTQmhoM2kxVUlNckxRa2Ivb0ROM0V5TT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTcwMjUxOTE3OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FBNTFCQjMxNzlBRDJBOEE1RTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTY4OTE3OTY2MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZkhXWm1JUE9TOXE0UGVBQWRBZWh2QSIsInBob25lSWQiOiJlYTZhM2UxNi02MzM0LTQxMDMtOWUxZC03NDA5YjFhZDdiZjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmpDY1ppSWxOVzB0eVNqTDlHS1ZJM0gveVZZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSV1NVbTV5RUdkdXN3ZTJhLy9wR0ZIMFVRaVU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQakx1SlVFRUltc3U2VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJubjNRNXI0a3JibEFsN2hMSm92WmlYamxncE8zZytPWERkbHh3U3JxTWc0PSIsImFjY291bnRTaWduYXR1cmUiOiJiVG5RNlp6eEg3Vk81QTczdDJJTnN6NmpjejB1cmhPUURtbGxQZHpUNW90OTFOd2ZEYkZyNUUxWkNxeWs4SHp6amxKb1M4L1dDUGhsT2R6c3E5K0lnUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV0t2ZFM0Wk4veTk5dCtLTXJoL3YzS09vZlFMU21TQ3dKY1cvZ0lTamdlbXgwenkxMzdBMWpXcXJKL2pZRWpvZGxPWm0yMldNY3dyVUN6RDM0VEE4Z2c9PSJ9LCJtZSI6eyJpZCI6IjkxNzAyNTE5MTc5MjoxNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJIeSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTcwMjUxOTE3OTI6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjU5ME9hK0pLMjVRSmU0U3lhTDJZbDQ1WUtUdDRQamx3M1pjY0VxNmpJTyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjg5MTc5NjU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUc5TyJ9',      //Put Your Session Id Here
  botname: process.env.BOT_NAME || 'STUNNING-AI',
  ownername:  process.env.OWNER_NAME || `KHADHER`,
  author:  process.env.PACK_AUTHER || 'khadher.inc', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "STUNNING AI" ,
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "true",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'true',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  caption :process.env.CAPTION || "\tPOWERED BY STUNNING AI ",  
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'false' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'' ,
  VERSION: process.env.VERSION || 'v.0.0.3',
  LANG: process.env.THEME|| 'STUNNING-AI',
  WORKTYPE: process.env.WORKTYPE || 'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
