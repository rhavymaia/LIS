// Criou um array de objetos/JSON, significando chave e valor respectivamente
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


// Iterando por todos os itens
for (let item of itens) {

  /* Criou uma constante e concatenou com a sintaxe html, além de dinamizar com template string
   as imagens, nomes e preparo

  */
  const view = `<div class="col card mx-1 py-1">
                  <img src="${item.imagem}" class="card-img-top" alt="...">

                  <div class="card-body">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">${item.preparo}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>`;

  //let itensCardapio = document.querySelector('.itens-cardapio');
  // criou uma variável e pegou o id 'itens-cardapio' do html
  let itensCardapio = document.getElementById("itens-cardapio");

  //Chamou a variável e inseriu os nós que resultam na árvore DOM em uma posição específica
  // No caso na posição após seu último filho
  itensCardapio.insertAdjacentHTML('beforeend', view);
}