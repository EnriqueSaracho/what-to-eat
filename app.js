document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn"); //Sets the find option button
  const span = document.querySelector("#result"); //Sets the span text
  // Checkboxes:
  const baguette = document.getElementById("baguette");
  const boneless = document.getElementById("boneless");
  const burgers = document.getElementById("burgers");
  const coffee = document.getElementById("coffee");
  const corndogs = document.getElementById("corndogs");
  const crepes = document.getElementById("crepes");
  const frenchFries = document.getElementById("frenchFries");
  const friedChicken = document.getElementById("friedChicken");
  const iceCream = document.getElementById("iceCream");
  const milkshakes = document.getElementById("milkshakes");
  const nachos = document.getElementById("nachos");
  const pasta = document.getElementById("pasta");
  const pizza = document.getElementById("pizza");
  const salad = document.getElementById("salad");
  const tacosCarneAsada = document.getElementById("tacosCarneAsada");
  const tacosCebosos = document.getElementById("tacosCebosos");
  const tacosPastor = document.getElementById("tacosPastor");
  const tacosVapor = document.getElementById("tacosVapor");

  console.log(burgers.checked)
  console.log(boneless.checked)
  console.log(burgers.checked)
  console.log(coffee.checked)
  console.log(corndogs.checked)
  console.log(crepes.checked)
  console.log(frenchFries.checked)
  console.log(friedChicken.checked)
  console.log(iceCream.checked)
  console.log(milkshakes.checked)
  console.log(nachos.checked)
  console.log(pasta.checked)
  console.log(pizza.checked)
  console.log(salad.checked)
  console.log(tacosCarneAsada.checked)
  console.log(tacosCebosos.checked)
  console.log(tacosPastor.checked)
  console.log(tacosVapor.checked)

  //The array of food places
  const foodArray = [
    // unheathy class means hurtfull to Fer's stomach
    // food categories:
    // burgers, fried chicken, french fries, milkshakes, nachos, tacos carne asada, tacos cebosos, pizza, boneless,
    // pasta, crepes, corndogs, baguette, tacos pastor, tacos vapor, coffee, ice cream, salad
    {
      name: "Carls.jr",
      food: ["burgers", "fried chicken", "french fries", "milkshakes"],
      unhealthy: "yes",
    },
    {
      name: "Nachos",
      food: ["nachos"],
      unhealthy: "no",
    },
    {
      name: "Cotaco",
      food: ["tacos carne asada"],
      unhealthy: "no",
    },
    {
      name: "Tacos don juan",
      food: ["tacos cebosos"],
      unhealthy: "no",
    },
    {
      name: "Pizza bonles",
      food: ["pizza", "boneless"],
      unhealthy: "yes",
    },
    {
      name: "Stella rose",
      food: ["pasta", "crepes", "corndogs", "salad"],
      unhealthy: "no",
    },
    {
      name: "Jarros y Tarros",
      food: ["baguette", "bonless", "nachos", "salad"],
      hurtfull: "yes",
    },
    {
      name: "Nostras",
      food: ["pizza", "pasta"],
      unhealthy: "yes",
    },
    {
      name: "Olivo",
      food: ["pizza", "pasta"],
      unhealthy: "yes",
    },
    {
      name: "Tacos Rosales",
      food: ["tacos pastor"],
      unhealthy: "no",
    },
    {
      name: "Tacos del Chavo",
      food: ["tacos pastor"],
      unhealthy: "yes",
    },
    {
      name: "Caffenio",
      food: ["coffee", "milkshake"],
      unhealthy: "no",
    },
    {
      name: "Dairy Queen",
      food: ["ice cream"],
      unhealthy: "yes",
    },
    {
      name: "McDonalds",
      food: [
        "burguers",
        "fried chicken",
        "french fries",
        "ice cream",
        "milkshakes",
      ],
      unhealthy: "yes",
    },
    {
      name: "Starbucks",
      food: ["coffee", "milkshake"],
      unhealthy: "no",
    },
    {
      name: "Little Caesars",
      food: ["pizza"],
      unhealthy: "yes",
    },
    {
      name: "Lola",
      food: ["boneless", "salad"],
      unhealthy: "yes",
    },
    {
      name: "Manzara",
      food: ["pasta", "salad", "pizza"],
      unhealthy: "no",
    },
  ];

  //function that shuffles and return an option from witch to eat
  function findOption() {
    span.textContent = shuffle(foodArray)[0].name;
  }

  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  btn.addEventListener("click", findOption);
});
