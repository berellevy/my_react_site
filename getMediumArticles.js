const xml2js = require("xml2js")
const {JSDOM} = require("jsdom")
const fs = require('fs')

const parser = new xml2js.Parser()

const fetchMediumRSS = async () => {
  const url = 'https://berellevy.medium.com/feed'
  try {
    const res = await fetch(url)
    const text = await res.text()
    return await parser.parseStringPromise(text)
  } catch (err) {
    console.log(err)
  }
}

function extractSnippet(text) {
  const dom = new JSDOM(text)
  const doc = dom.window.document
  return doc.querySelector("p").textContent
}

function parseArticle(article) {
  return {
    title: article.title[0],
    link: article.link[0],
    categories: article.category,
    pubDate: new Date(article.pubDate[0]),
    snippet: extractSnippet(article["content:encoded"][0])
  }
}

;(async () => {
  const mediumData = await fetchMediumRSS()
  const articlesRaw = mediumData.rss.channel[0].item
  const articles = articlesRaw.map(parseArticle)
  const recentArticles = articles.filter((article) => {
    return article.pubDate > new Date('2020-09-01')
  })
  const jsonString = JSON.stringify(recentArticles)
  fs.writeFileSync("src/medium-articles.json", jsonString)

  
})()