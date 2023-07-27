const axios = require('axios');
const { tlang,cmd ,khadherkml} = require('../lib')
const { redeploy , getvar , delvar , getallvar , change_env , get_deployments} = require('../lib/koyeb')

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "kupdatenow",
    desc: "update bot with refreshed commit.",
    filename: __filename,
    category: "koyeb",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().khadherkml);
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in khadherinc db,wait to stop one of them._')
       let data = await redeploy();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getvar",
    desc: "get desired var from koyeb.",
    filename: __filename,
    category: "koyeb",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().khadherkml);
       if(!text) return citel.reply('Please provide key.\n_Eg: .getvar PORT_')
       let data = await getvar(text);
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "getallvar",
    desc: "get all vars from koyeb.",
    filename: __filename,
    category: "koyeb",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().khadherkml);
       let data = await getallvar();
       return citel.reply(data)
  })
//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "setvar",
    desc: "set var in koyeb.",
    filename: __filename,
    category: "koyeb",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().khadherkml);
       if(!text.split(':')[1]) return citel.reply('*Wrong Format.*\nPlease provide key and value.\n_Eg: .setvar THEME:khadherinc_')
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await change_env(text)
       return citel.reply(data)
  })

//----------------------------------------------------------------------------------------------------------------------------------------------------
cmd(
  {
    pattern: "delvar",
    desc: "delete var from koyeb.",
    filename: __filename,
    category: "koyeb",
  },
  async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().khadherkml);
       if(!text) return citel.reply('Please provide key.\n_Eg: .delvar PORT_')
       let check = await get_deployments()
       if(check==='true') return citel.reply('_Please wait..._\n_Currently 2 instances are running in Koyeb,wait to stop one of them._')
       let data = await delvar(text)
       return citel.reply(data)
  })
