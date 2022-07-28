import itens from "./dataset.js";

for (let item of itens) {
  /*
    let cardItem =
      '<div class="col-4">' +
      '<div class="card" style="width: 18rem;"></div>' +
      '     <img src="' + item.imagem + '" class="card-img-top" alt="Xícara de café">';
    */
  let cardItem = `<div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${item.imagem}" class="card-img-top" alt="${item.nome}">
            <div class="card-body">
                <h5 class="card-title">${item.nome}</h5>
                <p class="card-text">
                    ${item.descricao}
                </p>
            </div>
        </div>
    </div>`;

  let cardDeck = document.getElementById("card-deck");
  cardDeck.insertAdjacentHTML("beforeend", cardItem);
}
