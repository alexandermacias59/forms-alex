function formSubmit (event){
    event.preventDefault()
    const myForm = document.getElementById("my-form");
    
    console.log(myForm.checkValidity());
    const data = new FormData(myForm);
    console.log(data.get("name"));
}


//FUnzione my POkemon

function getPokemon(event){
    event.preventDefault();
    const pform = document.getElementById("pokeform");
    const data = new FormData(pform);
    console.log(data);
    
    const pokemonName = data.get("search-string");
    console.log(pokemonName);

    const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    fetch(apiUrl)
    .then(res => res.json())
    .then(result => displayPokemon(result))
    .catch( err => displayPokemon(null))
}

function displayPokemon(pokemon){
const pokeDiv = document.getElementById("pokemon-container");
if (pokemon === null){
    const errorMessage = "pokemon non trovato";
    pokeDiv.innerHTML= errorMessage;
} else {
    const pokecard = `
                    <h2>${pokemon.name}</h2>
                    <img src="${pokemon.sprites.front_default}" alt="">
                    `
    pokeDiv.innerHTML = pokecard;
}

}