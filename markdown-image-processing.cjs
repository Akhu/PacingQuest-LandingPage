const replace = require('replace-in-file')

async function replaceGhostUrl() {
  const options = {
    files: './src/pages/posts-copy/*.md',
    from: /__GHOST_URL__\/content/g,
    to: ''
  }
  try {
    const results = await replace(options)
    console.log('Replacement results:', results)
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
//replaceGhostUrl()

async function replacePublicationDateForRssFeed() {
  const options = {
    files: './src/pages/posts/*.md',
    from: /date_published/g,
    to: 'pubDate'
  }
  try {
    const results = await replace(options)
    console.log('Replacement results:', results)
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
//replacePublicationDateForRssFeed()

async function replaceExcerptWithDescriptionForRssFeed() {
  const options = {
    files: './src/pages/posts/*.md',
    from: /excerpt/g,
    to: 'description'
  }
  try {
    const results = await replace(options)
    console.log('Replacement results:', results)
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
//replaceExcerptWithDescriptionForRssFeed()

async function appendLayoutToBlog() {
  const options = {
    files: './src/pages/posts/*.md',
    from: /---/,
    to: '---\nlayout: ../../layouts/MarkdownPostLayout.astro'
  }
  try {
    const results = await replace(options)
    console.log('Replacement results:', results)
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
//appendLayoutToBlog()

async function appendAuthorToBlog() {
  const options = {
    files: './src/pages/posts/*.md',
    from: /---/,
    to: '---\nauthor: Anthony Da Cruz'
  }
  try {
    const results = await replace(options)
    console.log('Replacement results:', results)
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
appendAuthorToBlog()