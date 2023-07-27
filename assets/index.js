const numberInput = document.querySelector('#number');
const info = document.querySelector('.info')
const errorDiv = document.querySelector('.error')
const form = document.querySelector('.form')
const peopleUrl = 'https://swapi.dev/api/people/';
const filmsUrl = 'https://swapi.dev/api/films/';
const starshipsUrl = 'https://swapi.dev/api/starships/';
const vehiclesUrl = 'https://swapi.dev/api/vehicles/';
const speciesUrl = 'https://swapi.dev/api/species/'
const planetsUrl = 'https://swapi.dev/api/planets/'


function blockBtn() {
  numberInput.value === '' ? document.querySelector('.btn').disabled = true : document.querySelector('.btn').disabled = false
}
blockBtn()

function checkInput() {
  if (numberInput.value <= 0 || numberInput.value >= 11) {
    alert('Enter number from 1 to 10')
  }
}

const hiddenLoader = () => {
  errorDiv.style.display  = 'none';
}

function createPeoplePage(name, birth, gender, mass, eye, hair, skin) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${name}</h2>
  <p class="text">Birth year: ${birth}</p>
  <p class="text">Gender: ${gender}</p>
  <p class="text">Mass: ${mass}</p>
  <p class="text">Eye color: ${eye}</p>
  <p class="text">Hair color: ${hair}</p>
  <p class="text">Mass: ${skin}</p>
  `
}

function createFilmsPage(title, episode, director, producer) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${title}</h2>
  <p class="text">Episode: ${episode}</p>
  <p class="text">Director: ${director}</p>
  <p class="text">Producer: ${producer}</p>
  `
}

function createStarshpsPage(name, model, manufacturer, length) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${name}</h2>
  <p class="text">Model: ${model}</p>
  <p class="text">Manufacturer : ${manufacturer}</p>
  <p class="text">Length: ${length}</p>
  `
}

function createSpeciesPage(name, classification, designation, language) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${name}</h2>
  <p class="text">Classification: ${classification}</p>
  <p class="text">Designation : ${designation}</p>
  <p class="text">Language: ${language}</p>
  `
}

function createPlanetsPage(name, diameter, population, climate) {
  const containerPost = document.createElement('div')
  containerPost.classList.add('container-info')
  info.append(containerPost)
  containerPost.innerHTML =
    `
  <h2 class="title">${name}</h2>
  <p class="text">diameter: ${diameter}</p>
  <p class="text">population : ${population}</p>
  <p class="text">climate : ${climate}</p>
  `
}

function getPeopleData(id) {
  fetch(peopleUrl + `${id}`)
    .then(response => response.json())
    .then(errorDiv.innerHTML = `Идет загрузка...`)
    .then(json => createPeoplePage(json.name, json.birth_year, json.gender, json.mass, json.eye_color, json.hair_color, json.skin_color))
    .catch(error => console.error(error))
    .finally(console.log('Запрос выполнен'))
}

function getFilmsData(id) {
  fetch(filmsUrl + `/${id}`)
    .then(response => response.json())
    .then(json => createFilmsPage(json.title, json.episode_id, json.director, json.producer))
    .catch(error => console.error(error))
    .finally(console.log('Запрос выполнен'))
}

function getStarshipsData(id) {
  fetch(starshipsUrl + `${id}`)
    .then(response => response.json())
    .then(json => createStarshpsPage(json.name, json.model, json.manufacturer, json.length))
    .catch(error => console.error(error))
    .finally(console.log('Запрос выполнен'))
}

function getVehiclesData(id) {
  fetch(vehiclesUrl + `${id}`)
    .then(response => response.json())
    .then(json => createStarshpsPage(json.name, json.model, json.manufacturer, json.length))
    .catch(error => console.error(error))
}

function getSpaciesData(id) {
  fetch(speciesUrl + `${id}`)
    .then(response => response.json())
    .then(json => createSpeciesPage(json.name, json.classification, json.designation, json.language))
    .catch(error => console.error(error))
    .finally(console.log('Запрос выполнен'))
}

function getPlanetsData(id) {
  fetch(planetsUrl + `${id}`)
    .then(response => response.json())
    .then(json => createPlanetsPage(json.name, json.diameter, json.population, json.climate))
    .catch(error => console.error(error))
    .finally(console.log('Запрос выполнен'))
}

function getSelectValue() {
  const selectedValue = document.getElementById("select-list").value;
  if (selectedValue === "People") {
    getPeopleData(numberInput.value)
  } if (selectedValue === "Films") {
    getFilmsData(numberInput.value)
  } if (selectedValue === "Starships") {
    getStarshipsData(numberInput.value)
  } if (selectedValue === "Vehicles") {
    getVehiclesData(numberInput.value)
  } if (selectedValue === "Spacies") {
    getSpaciesData(numberInput.value)
  } if (selectedValue === "Planets") {
    getPlanetsData(numberInput.value)
  }
  form.reset()
  blockBtn()
  setTimeout(hiddenLoader, 800);
}
