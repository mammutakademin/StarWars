const scrollBack = document.querySelector(".scroll-back")
const scrollForward = document.querySelector(".scroll-forward")
const starWarsCharacterList = document.querySelector("ul");
const additionalInfoDetails = document.querySelector(".additional-info-details");
const pageNumber = 1;
const api_url = "https://swapi.dev/api/people";
const additionalinfo = document.querySelector(".more-info")
const planetList = document.querySelector(".more-info");
const planetbtn = document.querySelector(".planet-btn")
const speciesbtn = document.querySelector(".species-btn")
const vehiclesbtn = document.querySelector(".vehicles-btn")
const starshipsbtn = document.querySelector(".starship-btn")




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
                peopledetails(p)
                getplanet(p)
                getclick(p)
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
    const response1 = await fetch(p.homeworld)
    const homeplanet = await response1.json()
    console.log(homeplanet)

     
    additionalinfo.innerHTML= 
    `<h3>${homeplanet.name}</h3>
     <p>Rotation period: ${homeplanet.rotation_period}</p>
     <p>Orbital period: ${homeplanet.orbital_period}</p>
     <p>Diameter: ${homeplanet.diameter}</p>
     <p>Climate: ${homeplanet.climate}</p>
     <p>Gravity: ${homeplanet.gravity}</p>
     <p>Terrain: ${homeplanet.terrain}</p>
     <p>Surface water: ${homeplanet.surface_water}</p>
     <p>Population: ${homeplanet.population}</p>`

  
}

function getclick(p){

    planetbtn.addEventListener( "click", function(){
        
        getplanet(p)
        console.log("hallå")})

}




















