
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

        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La Excursión Docente en la Educación Primaria: Una propuesta para el perfeccionamiento de su realización.",
            autor: "Rafael Bosque Suárez",
            local: "CEEA-GEA (2002)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Estrategia pedagógica de educación ambiental para el preuniversitario.",
            autor: "Tania  Merino Gómez",
            local: "CEEA-GEA (2010)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Estrategia pedagógica para el mejoramiento del desempeño profesional pedagógico en la educación del valor responsabilidad ambiental en los profesores de secundaria básica.",
            autor: "Amparo Osorio Abad",
            local: "CEEA-GEA (2012)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La educación ambiental en promotores ambientales.",
            autor: "Ana Gloria Rubié Cabrera",
            local: "CEEA-GEA (2019)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La educación ambiental en el trabajo espeleológico.",
            autor: "Jean Robaina Sánchez",
            local: "CEEA-GEA (2020)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La educación ambiental con perspectiva de género en Cuba.",
            autor: "Yaneisis Cisneros Ricardo",
            local: "CEEA-GEA (2022)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Actualización con un enfoque sociocultural del proceso de enseñanza-aprendizaje de la física nuclear para la formación y superación de profesores.",
            autor: "Pedro Julio Vázquez Conde",
            local: "CEEA-GEA (2003)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La Formación por competencias laborales: Proyecto de Diseño Curricular para el Técnico en Farmacia Industrial.",
            autor: "Enrique Cecilio Cejas Yanes",
            local: "CEEA-GEA (2005)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "El desarrollo de la cultura energética en estudiantes de secundaria básica, mediante una concepción didáctica integradora. Instituto Superior Pedagógico “José de la Luz y Caballero” Holguín.",
            autor: "Noemí Pupo Lorenzo",
            local: "CEEA-GEA (2006)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Estrategia pedagógica para el desarrollo de la actitud ambientalista que propicie el mejoramiento del desempeño profesional pedagógico del docente.",
            autor: "María Margarita Díaz Soto",
            local: "CEEA-GEA (2009)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Una estrategia didáctica para las actividades experimentales de Ciencias Naturales en la Secundaria Básica.",
            autor: "Juan Fundora Literas",
            local: "CEEA-GEA (2010)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La asignatura Geografía en el programa de educación básica yo, sí puedo seguir.",
            autor: "María Dolores Abad Cabrera",
            local: "CEEA-GEA (2013)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La preparación del profesorado para el desarrollo de la educación ambiental en la carrera de Licenciatura en Educación Preescolar.",
            autor: "Roberto Pérez Morán",
            local: "CEEA-GEA (2017)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "",
            autor: "Elio Lázaro Amador Lorenzo",
            local: "CEEA-GEA (2008)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "",
            autor: "Odelaisis Deliz de los Santos",
            local: "CEEA-GEA (2010)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Estrategia pedagógica para la formación inicial del profesor de secundaria básica en la función orientadora para la educación ambiental.",
            autor: "María Del Pilar Gibert Lamadrid",
            local: "CEEA-GEA (2011)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Estrategia de educación ambiental comunitaria desde la gestión integrada, para asentamientos aledaños a ríos altamente antropizados.",
            autor: "Ina Benita Morúa Fernández",
            local: "CEEA-GEA (2015)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "Programa de educación ambiental para la formación del licenciado en economía.",
            autor: "Oscar Faustino Fernández Naranjo",
            local: "CEEA-GEA (2017)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La dimensión ambiental de la superación profesional para museólogos municipales en La Habana.",
            autor: "Juan José Páez Costa",
            local: "CEEA-GEA (2018)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La educación ambiental en la formación de maestros primarios de nivel medio superior.",
            autor: "Gladys Noris Polledo Bustamante",
            local: "CEEA-GEA (2019)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La educación agroambiental en los profesores de la escuela pedagógica de Cuba.",
            autor: "Franciss Brown Smith",
            local: "CEEA-GEA (2023)",
            pais: "Cuba",
            link: "",
        },
        {
            nome: "Teses e dissertações | Tesis y disertaciones | Theses and dissertations",
            opcoes: ["td", "cu"],
            descricao: "La dimensión ambiental en el proceso de enseñanza-aprendizaje de la disciplina medios tecnológicos.",
            autor: "Maricel Vera Carrión",
            local: "CEEA-GEA (2023)",
            pais: "Cuba",
            link: "",
        },




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



