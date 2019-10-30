
// async function getPokemonData(url) {
// const response = await fetch(url)
// return await response.json()
// }

async function getPokemonData(url) {
try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    populateDOM(data.results)
} catch (error) {
    console.error(error)
}
}

const data = getPokemonData(`https://pokeapi.co/api/v2/pokemon/
`)

function populateDOM(pokeArray) {
pokeArray.forEach((pokemon) => {
    let pokeDiv = document.createElement("div")
        console.log(pokemon)
    let name = document.createElement("h2")
    let gender = document.createElement("p")
    let pic = document.createElement("img")

    pokeDiv.setAttribute('class', 'charDivs')
    pic.setAttribute('class', 'picDivs')
  
    let charNum = getCharNumber(person.url)
  
    name.textContent = pokemon.name
    pic.src = ``
  
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)
  
    mainArea.appendChild(personDiv)
  })
}