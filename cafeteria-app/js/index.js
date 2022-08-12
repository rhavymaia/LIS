import itens from "./dataset.js";

function createFoodCard(food) {
  let foodCard = `<div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${food.imagem}" class="card-img-top" alt="${food.nome}">
            <div class="card-body">
                <h5 class="card-title">${food.nome}</h5>
                <p class="card-text">
                    ${food.descricao}
                </p>
            </div>
        </div>
    </div>`;
  return foodCard;
}

function addFoodsCard() {
  for (let food of itens) {
    let foodCard = createFoodCard(food);
    let cardDeck = document.getElementById("card-deck");
    cardDeck.insertAdjacentHTML("beforeend", foodCard);
  }
}

// Adicionar onclick no button: addFoodButton
let addFoodButton = document.getElementById("addFoodButton");
addFoodButton.onclick = (event) => {
  // Recuperar o elemento do formulário pelo id.
  let foodForm = document.getElementById("foodForm");

  // Adicionar onsubmit no form: foodForm
  foodForm.onsubmit = (e) => {
    e.preventDefault();
    //TODO: Manipular o formulário
  };
};

addFoodsCard();
