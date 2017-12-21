
const apiUrl = (q) => `https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${q}`

fetch(apiUrl('lol'))
  .then(r => r.json())
  .then(d => console.log(d))

