const { prefix, Config,cmd,getBuffer } = require('../lib')

const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

cmd({

             pattern: "attp1",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.erdwpe.com/api/maker/attp?text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )

 

 cmd({

             pattern: "attp2",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=GataDios&text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )

     

    cmd({

             pattern: "attp",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=GataDios&text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )

     

     cmd({

             pattern: "ttp1",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=GataDios&text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )

     

     cmd({

             pattern: "ttp2",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=GataDios&text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )

     

     cmd({

             pattern: "ttp3",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp3?apikey=GataDios&text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )

     

     cmd({

             pattern: "ttp4",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp5?apikey=GataDios&text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )

     

     cmd({

             pattern: "ttp5",

             desc: "Makes glowing sticker of text.",

             category: "sticker",

             filename: __filename,

         },

         async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp6?apikey=GataDios&text=${text}`)

 return citel.reply(a,{packname:'khadherinc',author:'ATTP'},"sticker") 

         }

     )
