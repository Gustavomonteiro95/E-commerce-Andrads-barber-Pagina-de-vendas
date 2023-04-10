function search_product() {
  // obter o valor digitado no input de pesquisa
  var valorBusca = document.getElementById("search-bar").value.toLowerCase();
  
  // obter todas as caixas de produtos
  var caixasProdutos = document.querySelectorAll(".container .product-box");
  
  // percorrer cada caixa de produto e verificar se contém o texto de pesquisa
  caixasProdutos.forEach(function(caixaProduto) {
    var nomeProduto = caixaProduto.querySelector(".product-title").textContent.toLowerCase();
    
    if (valorBusca.length === 0 || nomeProduto.includes(valorBusca)) {
      // exibir a caixa de produto se contém o texto de pesquisa
      caixaProduto.style.display = "block";
    } else {
      // ocultar a caixa de produto se não contém o texto de pesquisa
      caixaProduto.style.display = "none";
    }
  });
}

var inputSearch = document.querySelector('#search-bar')
inputSearch.addEventListener("search", search_product)

/* Adc comentario para subir pro git */ 