//Nesta página, temos um array, que contém itens a serem apresentados na nossa página .

//Declaramos a variável para o array
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


//Para que ao adicionar um novo item no meu cardápio, eu não precise ficar inserido novos conjunto de códigos (cards) no html,
// trazemos a estrutura do card aqui, para o js e utilizamos uma estrutura de repetição.

// o for fará a repetição dos itens do cardápio
for (let item of itens) {


  // foi definida uma variável view, para que posteriormente, possa ser adicionada na tela

  // e também colocamos o item."elemento". , dentro de uma string literals para que apareça o elemento especificado da nossa lista "ITENS".
  //essa DIV é a estrutura do nosso card.
  const view = `<div class="col card mx-1 py-1"> 
                  <img src="${item.imagem}" class="card-img-top" alt="...">

                  <div class="card-body">
                    <h5 class="card-title">${item.nome}</h5>
                    <p class="card-text">${item.preparo}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>`;

  //let itensCardapio = document.querySelector('.itens-cardapio'); // esta é uma outra forma de selecionar o elemento do html
  let itensCardapio = document.getElementById("itens-cardapio"); // definimos uma variável para os itens do cardápio e utilizamos o elemento getElementById, para que possa ser selecionado o elemento da div que contém o card.
  itensCardapio.insertAdjacentHTML('beforeend', view);// por fim, é utilizado o itens.Cardapio com o elemento insertAdJacentHTML, que tem a função de fazer com que o item apareça na tela, em seguida nos parentes tem "beforeend", que significa dizer, aparecer antes do fim, o view é o código que será inserido..

}
// resumidamente, este script fará com que os itens do nosso array, apareça nos espaços especificados nque estão contidos
// na variável view, e para que de fato os códigos que estão nesta variável, sejam inseridos, pegamos o id do elemento lá
// no html e inserimos através do insertAdjacentHTML. a cada vez que adicionamos itens lá no array, eles serão executados
// já que declaramos uma estrutura de repetição, o for.
