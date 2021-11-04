const scrollBack = document.querySelector(".scroll-back")
const scrollForward = document.querySelector(".scroll-forward")
const starWarsCharacterList = document.querySelector("ul");
const additionalInfoDetails = document.querySelector(".additional-info-details");
const pageNumber = 1;
const api_url = "https://swapi.dev/api/people";

const additionalinfo = document.querySelector("additional-info-details")
const planetList = document.querySelector(".more-info");


//Gets the characters
getapi(api_url);

async function getapi(url){
    const response = await fetch(url) 
    .then(function(response) {   
        return response.json();
        hideloader();
    })
    .then(function(json) {
        let people = json.results;
        for(const p of people) {
            let listItem = document.createElement('li');
            listItem.classList.add("character-names")
            listItem.innerText = p.name
            starWarsCharacterList.appendChild(listItem);  
            listItem.addEventListener("click", function(){
                peopledetails(p),
                getplanet(p)
            })           
        }
    });
}

//Puts details out in the "details list"
function peopledetails(p){
        let infodetails = document.querySelector(".info-details")
        infodetails.innerHTML= 
        `<h3>${p.name}</h3>
         <p>Height: ${p.height}cm</p>
         <p>Mass: ${p.mass}kg</p>
         <p>Hair color: ${p.hair_color}</p>
         <p>Skin color: ${p.skin_color}</p>
         <p>Eye color: ${p.eye_color}</p>
         <p>Birth year: ${p.birth_year}</p>
         <p>Gender: ${p.gender}</p>`
}

// Fetch the planet
async function getplanet(p){
    const response = await fetch(p.homeworld)
    .then(function(response) {   
        return response.json();
    })
    .then(function(json) {
        let p = json.results;
        for(let homeplanets in planets) {
            let listItem = document.createElement('li');
            listItem.classList.add("planet-info")
            listItem.innerText = p.name
            additionalInfoDetails.appendChild(listItem);  
            // listItem.addEventListener("click", function(){planetdetails(p)})
            //VI BEHÖVER LISTA UT HUR MAN KALLAR PÅ JSON FÖR ATT SKRIVA UT DET
        }
    });
}

function planetdetails(p){
    let additionalinfo = document.querySelector(".more-info")
    additionalinfo.innerHTML= 
    `<h3>${p.name}</h3>
     <p>Rotation period: ${p.rotation_period}</p>
     <p>Orbital period: ${p.orbital_period}</p>
     <p>Diameter: ${p.diameter}</p>
     <p>Climate: ${p.climate}</p>
     <p>Gravity: ${p.gravity}</p>
     <p>Terrain: ${p.terrain}</p>
     <p>Surface water: ${p.surface_water}</p>
     <p>Population: ${p.population}</p>`
}

















// function addInfoListener(){
//     const planet = document.querySelector(".additional-info button:first-child")
//     const species = document.querySelector(".additional-info button:nth-child(2)")
//     const vehicles = document.querySelector(".additional-info button:nth-child(3)")
//     const starships = document.querySelector(".additional-info button:nth-child(4)")
//     planet.addEventListener("click", function (){show(focusp.homeworld)})
//     species.addEventListener("click", function (){show(focusp.species)})
//     vehicles.addEventListener("click", function (){show(focusp.vehicles)})
//     starships.addEventListener("click", function (){show(focusp.starships)})
// }

// funcion 
