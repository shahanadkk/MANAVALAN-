const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://d.top4top.io/p_2058369i80.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝘾𝙍𝙀𝘼𝙏𝙊𝙍 RAMEEZ SER*
*owner number wa.me/919995399396*

*𝙂𝙄𝙏𝙃𝙐𝘽 𝙇𝙄𝙉𝙆      https://github.com/LIYARAMEEz/LIYARAMEE*
*𝘼𝙐𝘿𝙄𝙊 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎    https://github.com/LIYARAMEEz/LIYARAMEE/tree/master/uploads*
*𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎  https://github.com/LIYARAMEEz/LIYARAMEE/tree/master/sticker*
`}) 

}));
