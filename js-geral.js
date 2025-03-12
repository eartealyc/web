//cabeçalho
window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
  var navbar = document.getElementById("navbar");

  if (window.pageYOffset > 150) {
    header.style.top = "-38vh";
    
    // Adicionar classe para iniciar a animação
    navbar.classList.add("navbar-fixed");
  } else {
    header.style.top = "0";

    // Remover classe para reverter a animação
    navbar.classList.remove("navbar-fixed");
  }
});


//sobre: 

//ver mais nos parágrafos
    function exibirTextoCompleto1() {
      var textoCompleto = document.querySelector(".texto-completo-1");
      var linkVerMais = document.querySelector(".link-ver-mais-1");

      textoCompleto.style.display = "block"; // Exibe o texto completo
      linkVerMais.style.display = "none"; // Oculta o link "ver mais"
    }

    function exibirTextoCompleto2() {
      var textoCompleto = document.querySelector(".texto-completo-2");
      var linkVerMais = document.querySelector(".link-ver-mais-2");

      textoCompleto.style.display = "block"; // Exibe o texto completo
      linkVerMais.style.display = "none"; // Oculta o link "ver mais"
    }

//mapa:

//exibe e oculta as infos do mapa
window.addEventListener("scroll", function() {
  var elements = document.querySelectorAll(".exibirInformacoes");

  for (var i = 0; i < elements.length; i++) {
    if (window.pageYOffset > 600) {
      elements[i].style.display = "none";

    }
  }
});
// Função para esconder o elemento 'info-map'
function limparMap(){
  var infomap = document.getElementById("info-map");
  infomap.style.display = 'none';
}
document.getElementById("local-map").addEventListener("click", limparMap);


//: clicar no link e ele será copiado para a area de transferencia
    
    function copiarLink(texto) {
      const textarea = document.createElement('textarea');
      textarea.value = texto;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      const mensagemCopiado = document.getElementById('mensagem-copiado');
      mensagemCopiado.style.display = 'block';
      setTimeout(() => {
        mensagemCopiado.style.display = 'none';
      }, 2000); // Esconde a mensagem após 2 segundos
    }

 


 