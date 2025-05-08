function getPokemonLocal(){
    const pokemon = JSON.parse(localStorage.getItem("pokemon"))
    
    const divPoke = document.querySelector(".pokemon_local")
    divPoke.insertAdjacentHTML("beforeend",`
       <button class="add">
            
        </button>
        <img class="imgg" src=${pokemon.sprites.front_default}>
          <p class ="base">Base experience: ${pokemon.base_experience}</p>
          <p class="abilitys">Abilitys:</p>
          <div class="abilities">
            
          </div>
        `)
    getAbilities(pokemon)
    const btnAdd = document.querySelector(".add")
    btnAdd.addEventListener("click",()=>{
        addPokemon(pokemon)
    })
}
getPokemonLocal()
function getAbilities(pokemon){
    const divAbilities = document.querySelector(".abilities")
    pokemon.abilities.forEach((item)=>{
        divAbilities.insertAdjacentHTML("beforeend",`
            <p>${item.ability.name}</p>
            
            `)
    })
}   
async function addPokemon(pokemon){
    

}