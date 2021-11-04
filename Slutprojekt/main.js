const scrollBack = document.querySelector(".scroll-back")
const scrollForward = document.querySelector(".scroll-forward")
const starWarsCharacterList = document.querySelector("ul");
const pageNumber = 1;
const api_url = "https://swapi.dev/api/people";

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
            listItem.classList.add ("character-names")
            listItem.innerText = p.name
            starWarsCharacterList.appendChild(listItem);  
            listItem.addEventListener("click", function(){peopledetails(p)})
        }
});


    // const data = await response.json();
    // if(response){
    //     hideloader();
    // }
    // show(data);
}

getapi(api_url);

// function hideloader() {
//     document.getElementByClass('loader').style.display = 'none';
// }


//  fetch('https://swapi.dev/api/people') 
//     .then(function(response) {   
//         return response.json(); 
//     })
//     .then(function(json) {
//         let people = json.results;
//         for(p of people) {
//             let listItem = document.createElement('li');
//             listItem.classList.add ("character-names")
//             listItem.innerText = p.name
//             starWarsCharacterList.appendChild(listItem);  
//             listItem.addEventListener("click", function(){peopledetails(p)})
//         }
// });


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