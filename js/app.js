var elHeightPokemon = document.querySelector('[data-height-pokemon]')
var elWeightPokemon = document.querySelector('[data-weight-pokemon]')
var elImgUrlPokemon = document.querySelector('[data-img-url-pokemon]')
var elTypePokemon = document.querySelector('[data-type-pokemon]')
var elNamePokemon = document.querySelector('[data-name-pokemon]')
var elForm = document.querySelector('[data-form]')
var elBoxAdd = document.querySelector('[data-add-box-pokemon]')
var elSearchPokemon = document.querySelector('[data-search-pokemon]')
var elSelectPokemon = document.querySelector('[data-select-pokemon]')
var elSortPokemon = document.querySelector('[data-sort-pokemon]')
var elTemplate = document.querySelector('[data-template-card]')

renderPokemon(pokemons);
elForm.addEventListener("submit", function (evt){
    evt.preventDefault();
    const pokemon = {
        name: null,
        height: null,
        weight: null,
        img:  null,
        type: [],
    };

    pokemon.name = elNamePokemon.value;
    pokemon.type = elTypePokemon.value.split(",");
    pokemon.height = elHeightPokemon.value;
    pokemon.weight = elWeightPokemon.value;
    pokemon.img = elImgUrlPokemon.value;

    pokemons.unshift(pokemon);
    elBoxAdd.prepend(createElBox(pokemon));

});

function renderPokemon(pokemons) {
    elBoxAdd.innerHTML = "";
   
    pokemons.forEach((pokemon) => {
        elBoxAdd.appendChild(createElBox(pokemon));        
    });
}

function createElBox(pokemon) {
    const card = elTemplate.content.cloneNode(true);
    card.querySelector("img").src = pokemon.img;
    card.querySelector("h2").textContent = pokemon.name;
    card.querySelector("p").textContent = pokemon.type;
    card.querySelector("[data-pokemon-height]").textContent = pokemon.height;
    card.querySelector("[data-pokemon-weight]").textContent = pokemon.weight;
    card.querySelector("[data-delete-button]").dataset.pokemonId = pokemon.id;

    // card.querySelector("[data-favourite-button]").dataset.id = pokemon.id;
    // card.querySelector("[data-favourite-button]").textContent = 
    // favorites.includes(pokemon.id) ? "added" : "add";

    return card;
}


elSelectPokemon.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let selectPokemon = pokemons.filter((pokemon) => pokemon.type.includes(elSelectPokemon.value)
);
renderPokemon(selectPokemon);
});

elSortPokemon.addEventListener('change', (e) =>{
    e.preventDefault()
    renderPokemon(sortPokemon(pokemons));
})

function sortPokemon(pokemons) {
 

    if (elSortPokemon.value === "A-z") {
      pokemons.sort((a, b)=> a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt());  
    }
    else if (elSortPokemon.value === "z-A") {
         pokemons.sort((a, b)=>b.name.toLowerCase().charCodeAt() - a.name.toLowerCase().charCodeAt());   
    }
    else if (elSortPokemon.value === "Weight up") {
         pokemons.sort((a, b)=> a.weight.charCodeAt() - b.weight.charCodeAt());   
    }
    else if (elSortPokemon.value === "Weight down") {
         pokemons.sort((a, b)=> b.weight.charCodeAt() - a.weight.charCodeAt());  
    }
    else if (elSortPokemon.value === "Height up") {
         pokemons.sort((a, b)=>a.height.charCodeAt() - b.height.charCodeAt());   
    }
    else if (elSortPokemon.value === "Height down") {
         pokemons.sort((a, b)=> b.height.charCodeAt() - a.height.charCodeAt());   
    }
    else{
        return "error";
    }
    return pokemons
}
elBoxAdd.addEventListener("click" , (e)=>{
if (!e.target.matches("[data-delete-button]")) return;
    const elT= e.target.dataset.pokemonId;
deletePokemon(elT); 
});


 function deletePokemon(id) {
    const index = pokemons.findIndex((pokemon)=> pokemon.id === +id);
    pokemons.splice(index , 1);
    renderPokemon(pokemons);
 };




































// elSortPokemon.addEventListener("click", (evt)=>{
//     evt.preventDefault();
//     const sortPokemon = pokemons.sort((a, b) => a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt());
//     renderPokemon(sortPokemon);
// });

// function filterPokemon(value) {
//     return value = elSearchPokemon.value;
// }


// "Electric","Fire","Water","Bug","Normal","Flying","Poison","Ground","Grass","Psychic","Ice","Rock"
// elBtnSearch.addEventListener("keyup", function (evt) {
//     evt.preventDefault();
//     const newArr = [];
//     for (let i = 0; i < pokemons.length; i++) {
//         const pokemon = pokemons [i];
        
//         if
//     }
// })

// for(var i = 0; i < pokemons.length; i++) {
//     var pokemon = pokemons[i];
//     // var elUrl = "http://www.serebii.net/pokemongo/pokemon/001.png"
   
//     var elLi = document.createElement('li');
//     var elTexts = document.createElement('div')
//     var elImgblock = document.createElement('div')
    

//     var elH3 = document.createElement('h3');
//     var elP = document.createElement('p');
//     var elKg = document.createElement('p');
//     var elImg = document.createElement('img')
     
//     elH3.textContent = `${pokemon.name}`;
//     elP.textContent = `${pokemon.type}`;
//     elKg.textContent = `${pokemon.weight}`;
//     elImg.src = `${pokemon.img}`;
    
//     elCards.appendChild(elLi);
//     elLi.appendChild(elTexts);
//     elLi.appendChild(elImgblock);
//     elImgblock.appendChild(elImg);
//     elTexts.appendChild(elH3);
//     elTexts.appendChild(elP);
//     elTexts.appendChild(elKg);

//     elTexts.classList.add("textcontent");
//     elImgblock.classList.add("imgcontent")
//     elH3.classList.add("name");
//     elP.classList.add("name2");
//     elKg.classList.add("weight");
//     elImg.classList.add("img");
// elFormAdd.addEventListener('submit', function(evt){
   
// })
    
    
// }
