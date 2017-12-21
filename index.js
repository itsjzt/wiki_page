
const apiUrl = (q) => `https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${q}`
const linkUrl = (q) => `https://en.wikipedia.org/wiki/${q.toString().replace(' ', '_')}`

async function getjson(query) {
  const blob = await fetch(apiUrl(query))
  console.log(blob)
}

getjson('samsung')
