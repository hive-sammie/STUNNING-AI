module.exports = {
    name: 'askdog',
    category: 'troll',
    desc: 'Makes troll image of given text.',
    async exec(citel, Void,args) {
      const url = `https://docs-jojo.herokuapp.com/api/meme-gen?top=${args.join(' ').split(";")[0]}&bottom=%20&img=https://i.imgur.com/o07ESQe.jpeg`;
      citel.imgurl(url,'khadherinc Troll Pack')
   }
}
