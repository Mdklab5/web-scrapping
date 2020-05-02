const request = require('request-promise')
const cheerio = require('cheerio')

const URL = 'https://www.globo.com/'

async function acesso(){
  const response = await request(URL)
  let $ = cheerio.load(response)
  let titulos =  $('p[class=hui-premium__title]').text()
  console.log(titulos)
}

acesso()