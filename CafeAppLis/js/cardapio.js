//Essa Lista apresenta todos os itens que estão dispostos no cardápio e que irão aparecer na página cardapio.html

const itens = [
  {
    "imagem":"https://images.unsplash.com/flagged/photo-1552938218-ac9ec40c702a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    "nome":"Café",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/photo-1553909489-cd47e0907980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
    "nome":"Sandwiche",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/photo-1598215439218-f79b46925d3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    "nome":"Suco",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1005&q=80",
    "nome":"Bolo",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/photo-1600431562968-ef337c8733ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    "nome":"Biscoito",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    "imagem":"https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80",
    "nome":"Leite",
    "preparo":"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
];

// Aqui vai gerar um laço de repetição para apresentar todos os elementos que contem na lista de itens do cardapio
for (let item of itens) {

  const view = `<div class="col card mx-1 py-1">
                  <img src="${item.imagem}" class="card-img-top" alt="...">

                  <div class="card-body">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">${item.preparo}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>`;

  //let itensCardapio = document.querySelector('.itens-cardapio');
  let itensCardapio = document.getElementById("itens-cardapio");
  itensCardapio.insertAdjacentHTML('beforeend', view);
}
