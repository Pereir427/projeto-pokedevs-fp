const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");



listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        
        esconderCartaoPokeved();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
    
        desativarPokedeveSeleiconadoNaListagem();

        ativarPokedevNaListagem(idPokedevSelecionado);

    })   
})


function esconderCartaoPokeved() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function  desativarPokedeveSeleiconadoNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

