
var elBtnAdd = document.querySelector('[data-btnadd]')
var elBtnSearch = document.querySelector('[data-btnsearch]')

var elCards = document.querySelector('[data-cards]')

for(var i = 0; i < pokemons.length; i++) {
    var pokemon = pokemons[i];
    // var elUrl = "http://www.serebii.net/pokemongo/pokemon/001.png"
   
    var elLi = document.createElement('li');
    var elTexts = document.createElement('div')
    var elImgblock = document.createElement('div')
    
    var elH3 = document.createElement('h3');
    var elP = document.createElement('p');
    var elKg = document.createElement('p');
    var elImg = document.createElement('img')
     
    elH3.textContent = `${pokemon.name}`;
    elP.textContent = `${pokemon.type}`;
    elKg.textContent = `${pokemon.weight}`;
    elImg.src = `${pokemon.img}`;
    
    elCards.appendChild(elLi);
    elLi.appendChild(elTexts);
    elLi.appendChild(elImgblock);
    elImgblock.appendChild(elImg);
    elTexts.appendChild(elH3);
    elTexts.appendChild(elP);
    elTexts.appendChild(elKg);

    elTexts.classList.add("textcontent");
    elImgblock.classList.add("imgcontent")
    elH3.classList.add("name");
    elP.classList.add("name2");
    elKg.classList.add("weight");
    elImg.classList.add("img");

    
    
}
