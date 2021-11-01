const starWarsCharacterList = document.querySelector('ul');
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
