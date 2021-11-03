const scrollBack = document.querySelector(".scroll-back")
const scrollForward = document.querySelector(".scroll-forward")
const starWarsCharacterList = document.querySelector("ul");
const pageNumber = 1;

window.addEventListener("load", displayFirstPage);
fetch('https://swapi.dev/api/people', {mode:'cors'}) 
    .then(function(response) {   
        return response.json(); 
    })
    .then(function(json) {
        let people = json.results;
        for(p of people) {
            let listItem = document.createElement('li');
            listItem.className = "character-names"
            listItem.innerHTML = '<li>' + '<a href="#">' + p.name + '</a>' + '</li>';
            starWarsCharacterList.appendChild(listItem);  
        }
});

/* function eventListener(){
    document.querySelectorAll("li").forEach((item) => item.addEventListener("click", renderInfo))
}; */