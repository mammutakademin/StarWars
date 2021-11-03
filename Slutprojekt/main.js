// const scrollBack = document.querySelector(".scroll-back")
// const scrollForward = document.querySelector(".scroll-forward")
const starWarsCharacterList = document.querySelector("ul");
const pageNumber = 1;
const api_url = "https://swapi.dev/api/people";

// async function getapi(url){
//     const response= await fetch(url);

//     const data = await response.json();
//     if(response){
//         hideloader();
//     }
//     show(data);
// }

// getapi(api_url);

// function hideloader() {
//     document.getElementByClass('loader').style.display = 'none';
// }

// function show(data){
// /*     let swcharacter = `
//     <h3></h3>
//     <p>Height: </p>
//     <p>Mass: </p>
//     <p>Hair color: </p>
//     <p>Skin color: </p>
//     <p>Eye color: </p>
//     <p>Birth year: </p>
//     <p>Gender: </p>
//     `; */
//     for(let s of data.list){
//         let swcharacter =
//         `<h3>${s.name}</h3>
//         <p>Height: ${s.height}cm</p>
//         <p>Mass: ${s.mass}kg</p>
//         <p>Hair color: ${s.hair_color}</p>
//         <p>Skin color: ${s.skin_color}</p>
//         <p>Eye color: ${s.eye_color}</p>
//         <p>Birth year: ${s.birth_year}</p>
//         <p>Gender: ${s.gender}</p>
//         `;
//     }
//     document.getElementByClass("info-details").innerHTML = swcharacter;
// }










 fetch('https://swapi.dev/api/people') 
    .then(function(response) {   
        return response.json(); 
    })
    .then(function(json) {
        let people = json.results;
        for(p of people) {
            let listItem = document.createElement('li');
            listItem.classList.add ("character-names")
            listItem.innerText = p.name
            
            // '<li>' + '<a href="#">' + p.name + '</a>' + '</li>';
            starWarsCharacterList.appendChild(listItem);  
            listItem.addEventListener("click", function(){peopledetails(p)})
        }
});


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


// async function getDetails(url){
//     const response = await fetch(url);
//     var data = await response.json();
//     }
/* function eventListener(){
    document.querySelectorAll("li").forEach((item) => item.addEventListener("click", renderInfo))
}; */