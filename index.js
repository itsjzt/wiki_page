// little helper functions (**)
const apiUrl = (q) => `https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${q}`
const linkUrl = (q) => `https://en.wikipedia.org/wiki/${q.toString().replace(' ', '_')}`.toLowerCase()
const li = (link, title, extract) => `<li class="show_each"><a href="${link}" target="_blank"><h3 class="heading">${title} </h3> <p class="show_extract">${extract}</p> </a></li>`

// calling the next function with values
function find(e) {
  const val = document.querySelector('#search').value
  fetch(apiUrl(val), {mode: 'cors'})
  .then( res => res.json() )
  .then( json => trimmer(json['query']['pages']))
}

// triming the obj's and call next function
function trimmer(resp) {
  const arr = []
  for (let obj in resp) {
    const { title, extract } = resp[obj]
    arr.push({ title, extract, link: linkUrl(title) })
  }
  document.querySelector('#wiki').innerHTML = ''
  arr.map( n => inject('#wiki', n) )
}

// inject obj's in the dom.
function inject(domChild, obj) {
  const { link, title, extract } = obj
  const str = li(link, title, extract)
  document.querySelector(domChild).innerHTML += str
  return false;
}

function submit(e) {
  if (e.key === 'Enter') {
    find()
  }
}

// after first time submit doesn't work
document.querySelector('#search').addEventListener('keydown', submit)