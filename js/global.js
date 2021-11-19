//-------------Elementos------------------------------------------
const btnNovaLista = document.getElementById("btnNovaLista")
const cardNovaLista = document.getElementById("cardNovaLista")
const formNovaLista = document.getElementById("novaLista")
const divListas = document.getElementById('listas')

const listas = []
//--------------funções-------------------------------------------
btnNovaLista.addEventListener("click", function(){
    cardNovaLista.style.display = "block"
})

formNovaLista.addEventListener("submit", function(event){
    //O evento submit indica o Enter e o do click
    event.preventDefault()
    const inputTitulo = document.querySelector("input[name='tituloLista']")
    if(inputTitulo.value != ""){
        const novaLista = {
            id: listas.length + 1,
            titulo: inputTitulo.value
        }
        listas.push(novaLista)
        console.log(listas)
        
        inputTitulo.value = ""

        listas.push(novaLista)
        window.localStorage.listas = JSON.stringify(listas)

    }
    else{
        alert("Escreve alguma coisa nessa desgraça")
    }
})
formNovaLista.addEventListener("reset", function(event){
    event.preventDefault()
    cardNovaLista.style.display = "none"
})

function renderList{
    listas = JSON.parse(window.localStorage.listas)
   listas.map(lista => {
     let h2Tag = document.createElement('H2')
     h2Tag.innerHTML = lista.titulo
     let divTag = document.createElement('DIV')
     divTag.setAttribute('class' , 'card-lista')
     divTag.appendChild(h2Tag)
     divListas.appendChild(divTag)
     console.log(divTag)
  })
}
if(window.localStorage.listas?.length > 0) {
    renderList()
}
