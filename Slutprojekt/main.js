let pageBack = document.querySelector(".previouspage")
let pageForward = document.querySelector(".nextpage")
const starWarsCharacterList = document.querySelector("ul");
const additionalInfoDetails = document.querySelector(".additional-info-details");
const pagePanel = document.querySelector(".page-panel");

let currentPage = 1;
const totalPages = 8;
const api_url = "https://swapi.dev/api/people/?page=1";

const additionalinfo = document.querySelector(".more-info")
const planetList = document.querySelector(".more-info");
const planetbtn = document.querySelector(".planet-btn")
const speciesbtn = document.querySelector(".species-btn")
const vehiclesbtn = document.querySelector(".vehicles-btn")
const starshipsbtn = document.querySelector(".starship-btn")


// function initialPage(){
//     getapi(api_url);
//     // showPageInfo()

// }


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
                // getclick(p)
                
            })           
        }
    });   
}
async function fetchCharacters(currentpage) {
    const request = await fetch(`https://swapi.dev/api/people/?page=${currentpage}`);
    const data = await request.json();
    return data.results;
  }
  
pageForward.addEventListener("click", () => {
    if(currentPage !== 8){
        loadNextPage();
    }
})

pageBack.addEventListener("click", () => {
    if(currentPage !== 1){
        loadPreviousPage();
    }
})

async function loadNextPage(page){
   currentPage++;
   let pageNumber = `${currentPage} / 8`;
   pagePanel.innerHTML = pageNumber;
}

async function loadPreviousPage(page){
   currentPage--;
   let pageNumber = `${currentPage} / 8`;
   pagePanel.innerHTML = pageNumber;
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

//BEHÖVER FIXA SÅ HUMANS VISAS + ALLA STARSHIPS

// function getclick(p){
//     planetbtn.addEventListener("click", function(){
        
//         getplanet(p)
//         console.log("hallå")})
//     speciesbtn.addEventListener("click", function(){
//         getspecies(p)
//     })
//     vehiclesbtn.addEventListener("click", function(){
//         getvehicles(p)
//     })

// }

// async function getspecies(p){
//     const response2 = await fetch(p.species)
//     const species = await response2.json()
//     console.log(species)

    
//     additionalinfo.innerHTML= 
//     `<h3>${species.name}</h3>
//      <p>Average height: ${species.average_height}</p>
//      <p>Average lifespan: ${species.average_lifespan}</p>
//      <p>Classification: ${species.classification}</p>
//      <p>Created: ${species.created}</p>
//      <p>Designation: ${species.designation}</p>
//      <p>Eye colors: ${species.eyecolors}</p>
//      <p>Hair colors: ${species.hair_colors}</p>
//      <p>Homeworld: ${species.homeworld}</p>`

  
// }

// async function getvehicles(p){
//     // for(let i =0; i < user.vehicles.length; i++){
//     //     try{
//     //       const vehicles = await fetch(user.vehicles[i])
//     //       const vehiclesData = await vehicles.json()

    
//     additionalinfo.innerHTML= 
//     `<h3>${vehicles.name}</h3>
//      <p>Average height: ${vehicles.model}</p>
//      <p>Average lifespan: ${vehicles.manufacturer}</p>
//      <p>Classification: ${vehicles.cost_in_credits}</p>
//      <p>Created: ${vehicles.length}</p>
//      <p>Designation: ${vehicles.crew}</p>
//      <p>Eye colors: ${vehicles.passengers}</p>
//      <p>Hair colors: ${vehicles.cargo_capacity}</p>
//      <p>Homeworld: ${vehicles.vehicle_class}</p>`

  
// }
// }
// }


