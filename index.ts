import * as cheerio from 'cheerio'

async function scrape(url: string) {
  const response = await fetch(url)
  const html = await response.text()
  return html
}

async function parse(element: string) {
  const result = await scrape('https://google.com')
  const $ = cheerio.load(result)
  const html = $.html(element)
  console.log(html)
}

const parsed = await parse('a')
console.log(parsed)
