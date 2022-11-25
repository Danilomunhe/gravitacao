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
        data: '1025', 
        descricao: "O árabe Alhazen (965-1039), estuda fenômenos óticos e propõe que os olhos humanos funcionem como lentes captadoras de luz. Afirma que as pessoas só vêem porque são capazes de detectar a luz que é refletida por outros objetos. Escreveu numerosas obras notáveis pelo estilo e pelas observações sobre os fenômenos da refração da luz, com especial incidência na refração atmosférica ao nascer e ao pôr do Sol.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 5,
        data: '1269', 
        descricao: "Pierre Pèlerin de Maricourt escreveu um trabalho conhecido como Epístola do Magneto,com a qual explica como identificar os pólos de uma bússola. Também descreve as leis da atração e repulsa magnética, bem como a descrição de bússolas, uma dos quais poderia direcionar seus passos para cidades e ilhas e qualquer lugar do mundo.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 6,
        data: '1510 - 1543', 
        descricao: "Pela primeira vez de que se têm registros, a teoria Heliocêntrica de Nicolau Copérnico é apresentada em sua obra Commentariolus.<br><br>  Nicolau Copérnico publica uma obra que trata sobre as revoluções dos corpos celestes em torno do Sol.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 7,
        data: '1589', 
        descricao: "Galileu Galilei inicia o estudo do movimento do pêndulo tendo determinado que o seu período não depende da massa, mas apenas do comprimento do fio. Foi o primeiro a pensar que este fenômeno permitiria fazer relógios muito mais precisos, e chegou já no final da sua vida a trabalhar no mecanismo de escapo que mais tarde originaria o relógio de pêndulo. Também em Pisa realizou as suas famosas experiências de queda de corpos em planos inclinados. Nestas demonstra que a velocidade de queda não depende do peso.", 
        imagem: './img/banner.jpg'
    },

    {
        id: 8,
        data: '1647 - 1657', 
        descricao: "Blaise Pascal enuncia os primeiros trabalhos sobre o vácuo e demonstra as variações da pressão atmosférica.<br><br>O italiano Evangelista Torricelli, inventa um barômetro de mercúrio, que mais tarde levaria seu nome.<br><br>Robert Hooke comprova a teoria de Galileu de que todos os corpos caem com a mesma velocidade no vácuo.", 
        imagem: './img/banner.jpg'
    },

    {
        id: 9,
        data: '1662 - 1666', 
        descricao: "Robert Boyle demonstra que o ar pode ser comprimido, formulando a lei que relaciona volume e pressão de um gás, que passaria a se chamar Lei de Boyle.<br><br>Isaac Newton faz as primeiras hipóteses sobre gravitação, segundo crenças, após ser atingido por uma maçã.<br><br>Isaac Newton descobre o espectro da luz branca, chegando à conclusão de que a luz branca é na verdade a composição de todas as cores do espectro que são as cores do arco-íris.<br><br>", 
        imagem: './img/banner.jpg'
    },

    {
        id: 10,
        data: '1738 - 1752', 
        descricao: "Daniel Bernoulli levanta a hipótese de que os gases são compostos de uma infinidade de partículas minúsculas, sempre em movimento. E que a temperatura de um gás reflete a velocidade dessas partículas. Também publica estudos sobre a pressão e a velocidade dos fluidos.<br><br>Benjamim Franklin publica o resultado de suas observações sobre raios, propondo que existem dois tipos de carga elétrica, a positiva e a negativa. Propõe também a lei da atraçãoe repulsa das cargas de acordo com seu sinal.", 
        imagem: './img/banner.jpg'
    },

    {
        id: 11,
        data: '1785 - 1801', 
        descricao: "Charles Augustin Coulomb enuncia a lei das forças eletrostáticas.<br><br>William Herschel descobre que o Sol emite, além de luz, outro tipo de raio: os raios infravermelhos.<br><br>Thomas Young demonstra que a luz é, ou pode se comportar como uma onda.<br><br> Carl Ritter descobre a radiação ultravioleta.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 12,
        data: '1820 - 1821', 
        descricao: "Hans Oersted aproxima uma bússola de um fio eletrificado, mostrando que a corrente elétrica podia mover o ponteiro da bússola dando uma demonstração prática de que as forças elétricas e magnéticas têm propriedades comuns.<br><br>André-Marie Ampère formula leis da eletrodinâmica.<br><br>Michael Faraday propõe os fundamentos da indução eletromagnética.", 
        imagem: './img/banner.jpg'
    },

    {
        id: 12,
        data: '1824 - 1831', 
        descricao: "Nicolas-Leonard-Sadi Carnot dá início à termodinâmica em uma tentativa de avaliar e aumentar a eficiência das máquinas a vapor.<br><br>Georg Simon Ohm formula a lei que relaciona o potencial, a resistência e a corrente elétrica.<br><br>Michael Faraday propõe a indução eletromagnética.<br><br>James Maxwell descreve a luz como uma onda eletromagnética.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 13,
        data: '1839 - 1843', 
        descricao: "Antoine Becquerel descobre um dispositivo capaz de captar energia da luz, a célula fotovoltaica.<br><br>Christian Doppler formula as bases do efeito Doppler.<br><br>James Prescott Joule constrói uma máquina capaz de medir a equivalência mecânica docalor, determinando assim a quantidade de trabalho mecânico necessária para produziruma unidade de calor.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 14,
        data: '1843 - 1847', 
        descricao: "Ada Lovelace é reconhecida como a primeira programadora de computadores, muito antes dos computadores modernos serem inventados. Seus estudos sobre a máquina analítica deCharles Babbage (um computador programável para usos genéricos) é considerado o primeiro algoritmo para computação do mundo.<br><br>A experiência de Joule torna possível a afirmação da chamada Lei de Conservação da Energia, ou Primeira Lei da Termodinâmica. Definida por Hermann Ludwig Ferdinand von Helmholtz.", 
        imagem: './img/banner.jpg'
    },

    {
        id: 15,
        data: '1848 - 1859', 
        descricao: "William Thomson, o Lorde Kelvin, verifica que a temperatura dos corpos não pode diminuir indefinidamente. Chegando a um limite a partir do qual ela não cai mais, denominado zero absoluto.<br><br>Armand Fizeau mede a velocidade da luz.<br><br>Rudolf Julius Emanuel Clausius cria a Segunda Lei da Termodinêmica.<br><br>Gustav Robert Kirchhoff descobre as linhas espectrais, diferentes para cada elemento químico.", 
        imagem: './img/banner.jpg'
    },

    {
        id: 16,
        data: '1865 - 1887', 
        descricao: "James Clerk Maxwell unifica as leis das forças elétricas e magnéticas. Descobre também que a luz é apenas energia eletromagnética em movimento. Ou seja, Maxwell unifica três ciências: a eletricidade, o magnetismo e a ótica.<br><br>A mecânica estatística, desenvolvida pelo alemão Ludwig Eduard Boltzmann, aprofunda a Teoria Cinética dos Gases, de Maxwell.<br><br>Heirich Rudolf Hertz descobre o efeito fotoelétrico.", 
        imagem: './img/banner.jpg'
    },
    {
        id: 17,
        data: '1895 - 1900', 
        descricao: 'Wilheim Konrad Röntgen revela a existência dos raios X.<br><br>Henri Becquerel descobre a radiatividade.<br><br>Rutherford descobre os raios alfa e beta produzidos nos átomos radiativos.<br><br>Max Planck propõe a existência de minúsculos "pacotes" de luz e chama esses pacotes de quanta.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 18,
        data: '1902', 
        descricao: 'Descoberta da radioatividade, que levou à invenção do raio-x móvel, que foi usado durante a I Guerra Mundial. Com seu marido, Pierre, Marie também descobriu os elementos radioativos polônio e rádio – e desenvolveu técnicas que permitem isolar isótopos radioativos. Em 1903, ela foi a primeira mulher a receber um Prêmio Nobel. Depois de  receber o Prêmio Nobel de Física, ela recebeu um Prêmio Nobel de Química e se tornou a primeira pessoa na história a receber duas premiações.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 19,
        data: '1905 - 1900', 
        descricao: 'Albert Einstein declara que os quanta são uma nova espécie de partículas: os átomos de luz.<br><br>Albert Einstein desenvolve a Teoria da Relatividade.<br><br>Hermann Minkowski desenvolve uma formulação matemática mais elegante e mais prática para a Teoria da Relatividade, adicionando uma quarta dimensão ao espaço, a dimensão do tempo.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 20,
        data: '1908 - 1913', 
        descricao: 'Jean-Baptiste Perrin observa pela primeira vez o tamanho dos átomos. 1911 - Ernest Rutherford verifica que o átomo tem um núcleo central, duríssimo, no qual fica concentrada quase toda sua massa.<br><br>Niels Bohr dá a primeira descrição de um átomo. No centro ficaria o núcleo, cerca de 100 mil vezes menor que o átomo todo. A sua volta girariam os elétrons da mesma forma como os planetas orbitam o Sol.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 21,
        data: '1916 - 1923', 
        descricao: 'Albert Einstein propõe a Teoria da Relatividade Geral que amplia sua Teoria da Relatividade, que então passa a ser conhecida como Teoria da Relatividade Restrita, para englobar os efeitos da força da gravidade.<br><br>Louis-Victor-Pierre-Raymond de Broglie demonstra que as partículas podem agir como ondas. Ele descobre que o elétron aparece como uma partícula, ou seja, um concentrado de matéria, e, também, como onda, como se sua massa estivesse espalhada pelo espaço, oscilando.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 22,
        data: '1926 - 1927', 
        descricao: 'Partindo da idéia de que as partículas, como o elétron, às vezes agem como ondas, Erwin Schrödinger reformula imagem dos átomos. Os elétrons, agora, não seriam mais partículas girando em torno do núcleo e sim como se cada elétron fosse uma onda vibrando ao redor do núcleo.<br><br>Werner Karl Heisenberg define o Princípio da Incerteza, sobre o qual se baseia quase toda a mecânica quântica.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 23,
        data: '1932 - 1934', 
        descricao: 'James Chadwick detecta o nêutron, a segunda partícula componente do núcleo dos átomos.<br><br>Carl David Anderson observa o pósitron, que é a antimatéria do elétron, ou seja, uma partícula igual ao elétron em todos os aspectos, exceto na carga elétrica, que é positiva no pósitron e negativa no elétron.<br><br>Enrico Fermi descobre a força que mais tarde seria chamada de nuclear fraca.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 24,
        data: '1935 - 1967', 
        descricao: 'Hideki Yukawa descobre a força nuclear forte.<br><br>Pela primeira vez um núcleo atômico é fissionado, o do Urânio.<br><br>São detectados outros dois tipos de partículas subatômicas, os mésons e os hípedrons.<br><br>Mais uma partícula subatômica é detectada, o neutrino, pelo Laboratório de Los Angeles.<br><br>John Wheeler propõe o termo “buraco negro”.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 25,
        data: '1970', 
        descricao: 'Rubin descobriu a existência da matéria escura, uma substância que estranhamente mantém o universo agrupado. Seu trabalho é reconhecido como uma das mais importantes descobertas do Século XX', 
        imagem: './img/banner.jpg'
    },
    {
        id: 26,
        data: '1972', 
        descricao: 'Murray Gell-mann propõe a teoria de que os componentes do núcleo atômico são compostos de partículas ainda menores, os quarks.', 
        imagem: './img/banner.jpg'
    },
    {
        id: 27,
        data: '1970', 
        descricao: 'Wu foi a primeira cientista a confirmar – e depois aprimorar – a teoria de Decaimento Beta de Enrico Fermi. Ela ficou famosa pelo “Experimento de Wu”', 
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

function abrir() {
    document.querySelector(".menu-burger-container").classList.toggle("active");
  }
  
document.querySelector(".menu-burger-container").addEventListener("click", abrir);