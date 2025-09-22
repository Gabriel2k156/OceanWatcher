// Codigo onde trás o Gráfico com o JavaScript
const Grhapy = document.getElementById('myChart').getContext("2d");


const grafico = new Chart(Grhapy, {
    type: 'bar',
    data: {
        labels: ['2021','2022', '2023', '2024', '2025'],
        datasets: [{
            label: "Plastico (Kg)",
            data: 'plastico',
            borderWidth: 1,
            backgroundColor: "green",
            hoverBackgroundColor: "red",
        },
        {
            label: "Outros (T)",
            data: 'outros',
            borderWidth: 1,
            backgroundColor: "blue",
            hoverBackgroundColor: "orange"
        },
    ]
    },
    options: {


       
        },



        scales: {
            y: {
                beginAtZero: true
            }
        }
    });

// função para buscar dados e atualizar o grafico
function atualizarGrafico(){
    fetch("/api/status")
        .then(response => response.json())
        .then(dados => {


            // atualizar sempre as 6 colunas
            grafico.data.datasets[0].data = dados.plastico;

            grafico.data.datasets[1].data = dados.outros;

            grafico.update();
        })
        .catch(error => console.error("Erro:", error));
}

atualizarGrafico();

setInterval(atualizarGrafico, 5000);

// Codigo para fazer o menu e aparecer de acordo com que passa o mouse por cima.
const nav = document.querySelector(".nav-bar");
const tophover = document.createElement("div");
tophover.style.position = "fixed";
tophover.style.top = "0";
tophover.style.left = "0";
tophover.style.width = "100%";
tophover.style.height = "50px";
tophover.style.zIndex = "999";
tophover.style.background = "transparent";
document.body.appendChild(tophover)

let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll === 0) {
        nav.classList.remove("hidden");
    } else if (currentScroll > lastScroll) {
        nav.classList.add("hidden")
    }

    lastScroll = currentScroll;
});

tophover.addEventListener("mouseenter", () => {
    nav.classList.remove("hidden");

});

nav.addEventListener("mouseleave", () => {
    if (window.scrollY > 0) {
        nav.classList.add("hidden");
    }
});


// Código que faz o texto da Sea aparacer

const original = document.getElementById("texto");
const tituloOriginal = document.getElementById("titulo")
const MudarTexto = document.getElementById("clicar-logo");

let textooriginal = `Cada gesto de apoio ajuda a manter viva a luta pela preservação marinha.
As ONGs são fundamentais na conscientização, pesquisa e proteção da vida nos mares.
Com o seu apoio, elas ganham força para combater a poluição e defender a biodiversidade.
A união de pequenas ações pode gerar grandes transformações.
Juntos, podemos garantir que as futuras gerações herdem um oceano mais limpo e saudável.`;

let textoSea = `Sea Shepherd é uma organização internacional de conservação marinha fundada em 
1977, dedicada à proteção da vida marinha e à defesa dos oceanos contra a pesca ilegal, caça de 
animais marinhos e destruição ambiental. Conhecida por suas ações diretas e campanhas ousadas, a 
Sea Shepherd atua em todo o mundo para preservar espécies ameaçadas e promover a conscientização 
sobre a importância dos ecossistemas marinhos. <br>
<a href="https://seashepherd.org.br/doe?source=header-main" target="_blank" rel="noopener noreferrer" class="link-sea">Sea Shepherd Brasil</a>`;


let tituloOriginal1 = "Apoie as ONGs"
let tituloSea = "Sea Shepherd Brasil"

let mostrandoSea = false;

function ChamarTexto() {
    if (mostrandoSea) {
        original.innerHTML = textooriginal;
        tituloOriginal.textContent = tituloOriginal1
        mostrandoSea = false;
    } else {
        original.innerHTML = textoSea; 
        tituloOriginal.textContent = tituloSea;
        mostrandoSea = true;
    }
}

MudarTexto.addEventListener("click", ChamarTexto);
