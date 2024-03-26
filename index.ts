import * as cheerio from 'cheerio'

async function scrape(url: string) {
  const response = await fetch(url)
  const html = await response.text()
  return html
}

async function parse(url: string, element: string) {
  const result = await scrape(url)
  const $ = cheerio.load(result)
  const html = $.html(element)
  console.log(html)
}

async function start(url: string, element: string) {
  const parsed = await parse(url, element)
  console.log(parsed)
}

await start('http://google.com', 'a')
