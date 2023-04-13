"use strict";
console.log("hello");

let productsContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let clicks = 0;
let maxClicksAllowed = 25;

const state = {
  allProductsArray: [],
};

function Products(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomNumber() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}

function renderProducts() {
  let products1 = getRandomNumber();
  let products2 = getRandomNumber();
  let products3 = getRandomNumber();

  while (
    products1 === products2 ||
    products1 === products3 ||
    products2 === products3
  ) {
    products2 = getRandomNumber();
    products3 = getRandomNumber();
  }

  image1.src = state.allProductsArray[products1].src;
  image2.src = state.allProductsArray[products2].src;
  image3.src = state.allProductsArray[products3].src;
  image1.alt = state.allProductsArray[products1].name;
  image2.alt = state.allProductsArray[products2].name;
  image3.alt = state.allProductsArray[products3].name;
  state.allProductsArray[products1].views++;
  state.allProductsArray[products2].views++;
  state.allProductsArray[products3].views++;
}
function handleProductsClick(event) {
  if (event.target === productsContainer) {
    alert("Please click on an image");
  }
  clicks++;
  let clickProducts = event.target.alt;
  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (clickProducts === state.allProductsArray[i].name) {
      state.allProductsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    productsContainer.removeEventListener("click", handleProductsClick);
    resultButton.addEventListener("click", renderResults);
    productsContainer.className = "no-voting";
  } else {
    renderProducts();
  }
}

function renderResults() {
  let ul = document.querySelector("ul");
  for (let i = 0; i < state.allProductsArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${state.allProductsArray[i].name} had ${state.allProductsArray[i].views} views and was clicked ${state.allProductsArray[i].clicks} times.`;
    ul.appendChild(li);
  }
}

let bag = new Products("bag", "./images/bag.jpg");
let banana = new Products("banana", "./images/banana.jpg");
let bathroom = new Products("bathroom", "./images/bathroom.jpg");
let boots = new Products("boots", "./images/boots.jpg");
let breakfast = new Products("breakfast", "./images/bathroom.jpg");
let bubblegum = new Products("bubblegum", "./images/bubblegum.jpg");
let chair = new Products("chair", "./images/chair.jpg");
let cthulhu = new Products("cthulhu", "./images/cthulhu.jpg");
let dogduck = new Products("dogduck", "./images/dog-duck.jpg");
let dragon = new Products("dragon", "./images/dragon.jpg");
let pen = new Products("pen", "./images/pen.jpg");
let petsweep = new Products("petsweep", "./images/pet-sweep.jpg");
let scissors = new Products("scissors", "./images/scissors.jpg");
let shark = new Products("shark", "./images/shark.jpg");
let sweep = new Products("sweep", "./images/sweep.jpg");
let tauntaun = new Products("tauntaun", "./images/tauntaun.jpg");
let unicorn = new Products("unicorn", "./images/unicorn.jpg");
let watercan = new Products("watercan", "./images/water-can.jpg");
let wineglass = new Products("wineglass", "./images/wine-glass.jpg");

state.allProductsArray.push(
  bag,
  banana,
  bathroom,
  breakfast,
  bubblegum,
  chair,
  cthulhu,
  dogduck,
  dragon,
  pen,
  petsweep,
  scissors,
  shark,
  sweep,
  tauntaun,
  unicorn,
  watercan,
  wineglass
);

renderProducts();

productsContainer.addEventListener("click", handleProductsClick);
