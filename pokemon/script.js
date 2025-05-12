function getPokemonLocal(){
    const pokemon = JSON.parse(localStorage.getItem("pokemon"))
    
    const divPoke = document.querySelector(".pokemon_local")
    divPoke.insertAdjacentHTML("beforeend",`
       <button class="add">
            add
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
    console.log(pokemon,"add")
    const userId = localStorage.getItem("userId")
    const obj = {
        userId,
        pokemon
    }
    const res = await fetch("http://localhost:3001/pokemon",{
        method:"POST",
        body: JSON.stringify(obj),
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    })
    if(res.status===201){
        modal("Pokemon adicionado com sucesso!")
    }

}
