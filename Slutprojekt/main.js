// ---- GLOBAL ----
let pageBack = document.querySelector(".previouspage")
let pageForward = document.querySelector(".nextpage")
let starWarsCharacterList = document.querySelector("ul");
let starWarsCharacterDetails = document.querySelector(".info-details");
let additionalinfo = document.querySelector(".more-info")
let api_url = "https://swapi.dev/api/people";
let previous;
let currentPage = 1;

const totalPages = 8;
const pagePanel = document.querySelector(".page-panel");
const planetList = document.querySelector(".more-info");
const planetbtn = document.querySelector(".planet-btn")
const speciesbtn = document.querySelector(".species-btn")
const vehiclesbtn = document.querySelector(".vehicles-btn")
const starshipsbtn = document.querySelector(".starship-btn")


//---- MAIN FUNCTION THAT GETS THE CHARACTERS AND API ----
getapi(api_url);
updatePage(currentPage);

async function getapi(url){
    showloader();
    const response = await fetch(url)
    
    .then(function(response) {   
        return response.json();
        
       
    })
    .then(function(json) {
        hideloader()
        let people = json.results;
        api_url = json.next;
        previous = json.previous;
        
        for(const p of people) {
            let listItem = document.createElement('li');
            listItem.classList.add("character-names")
            listItem.innerText = p.name
            starWarsCharacterList.appendChild(listItem);
            listItem.addEventListener("click", function(){
                peopledetails(p)
                getplanet(p)
            })           
        }
    });   
}
//---- LOADER FUNCTION ----
function showloader(){
   starWarsCharacterList.innerHTML = `<div class="loader"></div>`
   starWarsCharacterDetails.innerHTML = `<div class="loader"></div>`
   additionalinfo.innerHTML = `<div class="loader"></div>`
}
  
function hideloader(){
    starWarsCharacterList.innerHTML = ``
    
   
 }

// ---- CURRENT PAGE + PAGE COUNTER (1/9) ----
function updatePage(currentPage){
    let pageNumber = `${currentPage} / 9`;
    pagePanel.innerHTML = pageNumber;
}

pageForward.addEventListener("click", () => {
    if(api_url != null){
        removeAllChildNodes(starWarsCharacterList)
        getapi(api_url);
        currentPage++;
        updatePage(currentPage);
    }
})

pageBack.addEventListener("click", () => {
    if(previous != null){
        removeAllChildNodes(starWarsCharacterList)
        getapi(previous);
        currentPage--;
        updatePage(currentPage);
    }
})

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//---- PUTTING THE DETAILS INTO THE CHARACTERDETAILS LIST ----
function peopledetails(p){
    starWarsCharacterDetails.innerHTML= 
    `<h3>${p.name}</h3>
    <p>Height: ${p.height}cm</p>
    <p>Mass: ${p.mass}kg</p>
    <p>Hair color: ${p.hair_color}</p>
    <p>Skin color: ${p.skin_color}</p>
    <p>Eye color: ${p.eye_color}</p>
    <p>Birth year: ${p.birth_year}</p>
    <p>Gender: ${p.gender}</p>`
}

// ---- FETCHING THE PLANET DETAILS ----
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
     <p>Terrain: ${homeplanet.terrain}</p>`  
}

//---- STARTADE PÅ VG-UPPGIFT ----
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


