// Arquivo JSON
const cidades = [
    {
        "id": 1,
        "nome": "Ouro Preto",
        "foto": "./ouro_preto.JPG",
        "resumo": "Ouro Preto é uma cidade histórica localizada em Minas Gerais, Brasil. Fundada no século XVIII durante o ciclo do ouro, foi um dos principais centros da mineração no país. Seu nome vem do ouro escuro encontrado na região. A cidade é conhecida pela arquitetura colonial, igrejas barrocas (como a Igreja de São de Assis, de Aleijadinho) e importância na Inconfidência Mineira. Em 1980, foi tombada como Patrimônio Mundial pela UNESCO. Hoje, é um importante destino turístico e cultural.",
        "sobre": ""
    },
    {
        "id": 2,
        "nome": "Sabará",
        "foto": "./sabará.webp",
        "resumo": "Sabará é uma cidade histórica de Minas Gerais, Brasil, que teve grande importância durante o ciclo do ouro no século XVIII. Com ruas de pedra, casarões antigos e igrejas barrocas, preserva viva a memória do período colonial. Um dos principais pontos turísticos da cidade é a Igreja de Nossa Senhora do Ó, construída no século XVIII. Apesar da fachada simples, seu interior é ricamente decorado em estilo barroco e rococó, com entalhes em madeira e pinturas impressionantes. Localizada em um ponto alto, oferece também uma bela vista da região. Sabará é ainda conhecida por eventos culturais, como o tradicional Festival da Jabuticaba.",
        "sobre": ""
    },
    {
        "id": 3,
        "nome": "Serro",
        "foto": "./serro.avif",
        "resumo": "Serro é uma cidade histórica de Minas Gerais, fundada no século XVIII durante o ciclo do ouro e dos diamantes. Reconhecida por sua arquitetura colonial bem preservada, ruas de pedra e igrejas barrocas, a cidade guarda forte ligação com a cultura mineira. O Serro também é famoso pelo seu tradicional Queijo do Serro, considerado um dos mais antigos do Brasil e patrimônio cultural imaterial. Além da história e da gastronomia, o município se destaca pelas festas religiosas, paisagens naturais e pelo clima acolhedor, atraindo visitantes que buscam turismo cultural e ecológico.",
        "sobre": ""
    }
]



const main = document.getElementById('main');

function construirHTML() {
    var cidade1 = cidades.find(cidade => cidade.id == 1);
    var cidade2 = cidades.find(cidade => cidade.id == 2);
    var cidade3 = cidades.find(cidade => cidade.id == 3);

    main.innerHTML += `
        <section class="mb-5 p-4 rounded bg-light border">
            <a href="${redirecionar(1)}" class="text-decoration-none"><h2 class="mb-3 text-dark" id="nome">${cidade1.nome}</h2></a>
            <img src="${cidade1.foto}" alt="Ouro Preto" class="d-block mx-auto mb-3 img-fluid w-75" id="foto">
            <p class="text-dark" id="resumo">${cidade1.resumo}</p>
        </section>

        <section class="mb-5 p-4 rounded bg-light border">
            <a href="${redirecionar(2)}" class="text-decoration-none"><h2 class="mb-3 text-dark" id="nome">${cidade2.nome}</h2></a>
            <img src="${cidade2.foto}" alt="Ouro Preto" class="d-block mx-auto mb-3 img-fluid w-75" id="foto">
            <p class="text-dark" id="resumo">${cidade2.resumo}</p>
        </section>

        <section class="mb-5 p-4 rounded bg-light border">
            <a href="${redirecionar(3)}" class="text-decoration-none"><h2 class="mb-3 text-dark" id="nome">${cidade3.nome}</h2></a>
            <img src="${cidade3.foto}" alt="Ouro Preto" class="d-block mx-auto mb-3 img-fluid w-75" id="foto">
            <p class="text-dark" id="resumo">${cidade3.resumo}</p>
        </section>

        <div class="d-flex justify-content-start m-0 col-6 ">
            <article class="p-4 rounded border text-center w-75">
                <h2 class="mb-3 text-dark">Cidades Históricas</h2>
                <img src="tiradentes.webp" alt="Cidade histórica" class="d-block mx-auto mb-3 img-fluid w-75">
                <p class="text-dark">
                    Descubra a melhor época para visitar as cidades históricas de Minas Gerais e aproveitar ao máximo
                    suas atrações culturais e arquitetônicas.
                </p>
                <a href="#" class="fw-bold text-primary text-decoration-underline">Saiba mais</a>
            </article>
        </div>
    `;
}

function redirecionar(id) {
    return `detalhes.html?id=${id}`;
}

function pegarID() {
    const params = URLSearchParams(window.location.search);
    const id = params.get("id");
    return id;
}