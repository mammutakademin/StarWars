const starWarsCharacterList = document.querySelector('ul');
fetch('https://swapi.dev/api/people', {mode:'cors'}) 
    .then(function(response) {   
    return response.json(); 
    })
    .then(function(json) {
    let people = json.results; 
    for(p of people) {
        let listItem = document.createElement('li'); 
        listItem.innerHTML = '<p>' + p.name + '</p>'; 
        starWarsCharacterList.appendChild(listItem);  
    }
});