'use strict'

const db = [
    {
        id: 1,
        data: 'Séc. V a.C.', 
        descricao: " O filósofo grego Leucipo desenvolve a teoria de que a matéria de todos os corpos é formada por partículas infinitamente pequenas chamadas de átomos.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 2,
        data: 'Séc. III a.C', 
        descricao: " Aristóteles elaborou um sistema filosófico para a explicação do movimento dos corpos e do mundo físico que o cercava. Para Aristóteles, toda e qualquer matéria era composta de quatro elementos: Terra, Água, Ar e Fogo, e esses elementos tinham posições determinadas no Universo. O lugar natural do fogo e do ar era sempre acima do lugar natural da água e da terra. Desse modo explicava porque uma pedra e a chuva caem: seus lugares naturais eram terra e água.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 3,
        data: 'Séc. III a.C', 
        descricao: " O pensador grego Arquimedes deduziu muitas descrições corretas da hidrostática quando, como a história conta, ele notou que seu próprio corpo deslocava um volume de água enquanto ele estava tomando um banho um dia.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 4,
        data: 'Séc. III a.C', 
        descricao: " O pensador grego Arquimedes deduziu muitas descrições corretas da hidrostática quando, como a história conta, ele notou que seu próprio corpo deslocava um volume de água enquanto ele estava tomando um banho um dia.", 
        imagem: './img/banner.jpg'
    },
]

const criarCardjogos = (produto)=>{

    // if (jogo.platforms != null) {
        const cardContent = document.createElement('div')
        cardContent.classList.add('card-content')
        cardContent.innerHTML =

        `   
        <div class="frente">
                <img src="${produto.imagem}" alt="Esse Jogo não possui foto">
                <div class="titulo">
                    <h2>${produto.data}</h2>
                </div>
            </div>
            <div class="atras">
                <h2>${produto.data}</h2>
            <div class="informacoes">
                <p>${produto.descricao}</p>
            </div>
            
        </div>
        </div>`
    
        return cardContent
// }
}
const carregarJogos = (produtos)=>{
    const container = document.getElementById('container-cards')
    const gerarJogos = produtos.map(criarCardjogos)

    container.replaceChildren(...gerarJogos)
}


carregarJogos(db);

