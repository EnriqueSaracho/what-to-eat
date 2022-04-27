document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn"); // Sets the find option button
  const span = document.querySelector("#result"); // Sets the span text
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
  // Radio buttons:
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");

  // Array: Food places.
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

  // Function: Creates a copy of foodArray, and returns a random option from witch to eat.
  function findOption() {
    let copyArray = foodArray.slice();
    span.textContent = shuffle(copyArray)[0].name;
  }

  // Function: Shuffles array.
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

  // Function: Goes through array and eliminates specific objects.
  function sortArray(array) {
    if (baguette == false) {
      array.forEach(element => {
        if (search(element.name, "baguette")) {
          array.pop()
        }
      });
    }
    
  }

  // Function: Searches for food in each element of array
  function search(array, food) {
    array.forEach(element => {
      if (element === food) {
        return true;
      }
    })
  }

  btn.addEventListener("click", findOption);
});
