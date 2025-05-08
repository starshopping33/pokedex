let offset = 0
async function initPokedex(){
    const ul = document.querySelector(".pokemons")
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon`,{
        headers: {
            "Content-type":"application/json; charset=utf-8"
        }
    })
    const response = await res.json()
    console.log(response,"response")
    const listPokemon = response.results
    for(let item of listPokemon){
        const data = await fetch(item.url,{
            headers: {
                "Content-type":"application/json; charset=utf-8"
            }
        })
        const dados = await data.json()
        ul.insertAdjacentHTML("beforeend",`
            <li id=${item.name}>
                <p>${item.name}</p>
                <img src="${dados.sprites.front_default}">
            </li>
            `)
            const btnPokemon = document.getElementById(item.name)
            btnPokemon.addEventListener("click",()=>{
               
                localStorage.setItem("pokemon",JSON.stringify(dados))
                location.href = "/pokemon"
            })
    }
    const prevBtn = document.querySelector("#prev")
   
    const btnNext = document.querySelector("#next")
    btnNext.addEventListener("click",()=>{
        offset = offset+20
        prevBtn.removeAttribute("disabled")
        nextPage()
    })
    prevBtn.addEventListener("click",()=>{
        offset = offset-20
        if(offset===0){
            prevBtn.setAttribute("disabled",true)
        }
        nextPage()
    })
    prevBtn.setAttribute("disabled",true)

   
}
initPokedex()
async function nextPage(){
    const ul = document.querySelector(".pokemons")
    ul.innerHTML = ""
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`,{
        headers: {
            "Content-type":"application/json; charset=utf-8"
        }
    })
    const response = await res.json()
    console.log(response,"response")
    const listPokemon = response.results
    for(let item of listPokemon){
        const data = await fetch(item.url,{
            headers: {
                "Content-type":"application/json; charset=utf-8"
            }
        })
        const dados = await data.json()
        ul.insertAdjacentHTML("beforeend",`
             <li id=${item.name}>
                <p>${item.name}</p>
                <img src="${dados.sprites.front_default}">
            </li>
            `)
            const btnPokemon = document.getElementById(item.name)
            btnPokemon.addEventListener("click",()=>{
               
                localStorage.setItem("pokemon",JSON.stringify(dados))
                location.href = "/pokemon"
    })
   
    }
}