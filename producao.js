
function filtrarLista() {

    let contadorItensExibidos = 0;
    let valorSelecionado = null;

    // Obter os elementos da lista de checkboxes
    const opcao0 = document.getElementById("filtrarOpcao0").checked;
    const opcao1 = document.getElementById("filtroOpcao1").checked;
    const opcao2 = document.getElementById("filtroOpcao2").checked;
    const opcao3 = document.getElementById("filtroOpcao3").checked;
    const opcao4 = document.getElementById("filtroOpcao4").checked;
    const opcao5 = document.getElementById("filtroOpcao5").checked;
    const opcao6 = document.getElementById("filtroOpcao6").checked;
    const opcao7 = document.getElementById("filtroOpcao7").checked;
    const opcao8 = document.getElementById("filtroOpcao8").checked;
    const opcao9 = document.getElementById("filtroOpcao9").checked;
    const opcao10 = document.getElementById("filtroOpcao10").checked;
    const opcao11 = document.getElementById("filtroOpcao11").checked;

   
    
    const listaItens = document.getElementById("listaItens"); // Obter a lista de itens e limpar os itens anteriores
    listaItens.innerHTML = "";








    const Dados = [

//teses e dissertações

//livros e capitulos

        {
            nome: "Livros e capítulos | Libros y capítulos | Books and chapters",
            opcoes: ["livro", "ar"],
            descricao: "III Jornadas Internacionales y V Jornadas Nacionales de Ambiente : libro de resúmenes extendidos",
            autor: "Silvina Corbetta et. al.",
            local: "Universidad Nacional de Hurlingham | Universidad Nacional de Moreno",
            pais: "",
            link: "https://drive.google.com/file/d/1kB6n5Y0Gu0PYU5bNMxItsUQmwahb_UVp/view",
        },
        {
            nome: "Livros e capítulos | Libros y capítulos | Books and chapters",
            opcoes: ["livro", "co"],
            descricao: "La concepción de ambiente en las tesis de maestrías en ciencias sociales. Hacia la comprensión de la complejidad ambiental",
            autor: "Katherine Higuita Alzate",
            local: "Institutional Repository of the Pontifical Bolivarian University",
            pais: "Colombia",
            link: "https://repository.upb.edu.co/handle/20.500.11912/9777",
        },

//Artigos em periodicos

        {
            nome: "Artigos em periódico | Artículos en revistas | Papers in journals",
            opcoes: ["artigo", "ar"],
            descricao: "Itinerarios del “Estado del Arte de la Educación Ambiental Superior en Argentina” (EArte-Ar) Caminos, resultados preliminares y desafíos.",
            autor: "Sandra A. Alvino | Silvina Corbetta | Candela De la Vega | María L. Foradori | Andrea D. Franco | Raúl E. Ithuralde | José A. Maldonado | Daniel A. Pereyra | Daniela M. Truchet.",
            local: "Revista Triângulo (2022)",
            pais: "Argentina",
            link: "https://seer.uftm.edu.br/revistaeletronica/index.php/revistatriangulo/article/view/6848",
        },
        {
            nome: "Artigos em periódico | Artículos en revistas | Papers in journals",
            opcoes: ["artigo", "ar", "br", "co"],
            descricao: "El Colectivo EArte-ALyC y la investigación en Edcucación Ambiental en América Latina (2022)",
            autor: "Danilo Seithi Kato | María Luisa Eschenhagen Durán | Silvina Corbetta.",
            local: "Revista Triângulo (2023)",
            pais: "Argentina | Brasil | Colombia",
            link: "https://seer.uftm.edu.br/revistaeletronica/index.php/revistatriangulo/article/view/6812",
        },
        {
            nome: "Artigos em periódico | Artículos en revistas | Papers in journals",
            opcoes: ["artigo", "ar"],
            descricao: "Educación Ambiental Superior: de cómo nos forman y formamos en nuestras universidades: reflexiones en torno a las producciones académicas de estudiantes y docentes en el marco de un seminario latinoamericano (2023)",
            autor: "María Luisa Eschenhagen Durán | Silvina Corbetta.",
            local: "Revista Triângulo (2022)",
            pais: "Argentina",
            link: "https://seer.uftm.edu.br/revistaeletronica/index.php/revistatriangulo/article/view/6476/6745",
        },
        

//artigos em anais

// Relatorio

        {
            nome: "Relatórios e projetos | Informes y proyectos | Reports and projects",
            opcoes: ["relatorio", "ar"],
            descricao: "Informe final PIUNAHUR 2021",
            autor: "Silvina Corbetta | Lucía Giménez",
            local: "Universidad Nacional de Hurlingham (2021)",
            pais: "Argentina",
            link: "../arquivos/informe-1.pdf",
        },
        {
            nome: "Relatórios e projetos | Informes y proyectos| Reports and projects",
            opcoes: ["relatorio", "ar"],
            descricao: "Convocatoria a proyectos de investigación de La Universidad Nacional de Hurlingham ‘PI UNAHUR 2023’",
            autor: "Silvina Corbetta",
            local: "Universidad Nacional de Hurlingham (2023)",
            pais: "Argentina",
            link: "../arquivos/informe-2.pdf",
        },
//

    ];









// Filtrar
    Dados.forEach(item => {
        if ((opcao0) ||
            (opcao1 && item.opcoes.includes("td")) ||
            (opcao2 && item.opcoes.includes("livro")) ||
            (opcao3 && item.opcoes.includes("artigo")) ||
            (opcao4 && item.opcoes.includes("evento")) ||
            (opcao5 && item.opcoes.includes("relatorio")) ||
            (opcao6 && item.opcoes.includes("ar")) ||
            (opcao7 && item.opcoes.includes("br")) ||
            (opcao8 && item.opcoes.includes("ch")) ||
            (opcao9 && item.opcoes.includes("co")) ||
            (opcao10 && item.opcoes.includes("cu")) ||
            (opcao11 && item.opcoes.includes("me"))){

            const li = document.createElement("li");
            
            const nomeItem = document.createElement("h3");
            nomeItem.textContent = item.nome;
            li.appendChild(nomeItem);
            
            const descricaoItem = document.createElement("p");
            descricaoItem.textContent = item.descricao;
            li.appendChild(descricaoItem);

            const autorItem = document.createElement("p");
            autorItem.textContent = item.autor;
            li.appendChild(autorItem);

            const localItem = document.createElement("p");
            localItem.textContent = item.local;
            li.appendChild(localItem);

            const paisItem = document.createElement("p");
            paisItem.textContent = item.pais;
            li.appendChild(paisItem);
            
            const linkItem = document.createElement("a");
            linkItem.href = item.link;
            linkItem.textContent = "Acesso";
            linkItem.target = "_blank";
            li.appendChild(linkItem);

            listaItens.appendChild(li);

            contadorItensExibidos++; 
        }
    });


//exibe o valor do contador
    const contadorElement = document.getElementById("contador");
    contadorElement.textContent = `📁 ${contadorItensExibidos}`;

//exibe caixa de busca    
    const buscador = document.getElementById("buscador");

        if (buscador.style.display === 'none') {
            buscador.style.display = 'flex';
        }  
}

//limapa os dados da busca e zera o contador
function clean() {

    let contadorItensExibidos = 0;    
    const listaItens = document.getElementById("listaItens");
    const contadorElement = document.getElementById("contador");

    listaItens.innerHTML = ""; // Limpa todos os itens da lista
    contadorItensExibidos = 0; // Zera o contador
    contadorElement.textContent = ``; // Atualiza    
}



