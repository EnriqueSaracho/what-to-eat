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
      food: ["pizza", "boneless", "french fries"],
      unhealthy: "yes",
    },
    {
      name: "Stella rose",
      food: [
        "pasta",
        "crepes",
        "corndogs",
        "salad",
        "burgers",
        "french fries",
        "nachos",
        "boneless",
        "baguette",
      ],
      unhealthy: "no",
    },
    {
      name: "Jarros y Tarros",
      food: [
        "baguette",
        "boneless",
        "nachos",
        "salad",
        "french fries",
        "burgers",
        "coffee",
      ],
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
      food: ["tacos vapor"],
      unhealthy: "yes",
    },
    {
      name: "Caffenio",
      food: ["coffee", "milkshakes"],
      unhealthy: "no",
    },
    {
      name: "Dairy Queen",
      food: ["ice cream", "milkshakes"],
      unhealthy: "yes",
    },
    {
      name: "McDonalds",
      food: [
        "burgers",
        "fried chicken",
        "french fries",
        "ice cream",
        "milkshakes",
      ],
      unhealthy: "yes",
    },
    {
      name: "Starbucks",
      food: ["coffee", "milkshakes"],
      unhealthy: "no",
    },
    {
      name: "Little Caesars",
      food: ["pizza"],
      unhealthy: "yes",
    },
    {
      name: "Lola",
      food: [
        "boneless",
        "salad",
        "burgers",
        "french fries",
        "pizza",
        "pasta",
        "coffee",
      ],
      unhealthy: "yes",
    },
    {
      name: "Manzara Salads",
      food: ["salad"],
      unhealthy: "no",
    },
  ];

  // Function: Creates a new Array, fills it with the checked elements, and returns a random option from witch to eat.
  function findOption() {
    const sortedArrayOne = []; // Gets all the elements from Checkboxes
    const sortedArrayTwo = []; // Gets all the selected elements from Radio buttons

    // Checkbox: Baguette
    if (baguette.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "baguette") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Boneless
    if (boneless.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "boneless") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Burgers
    if (burgers.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "burgers") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Coffee
    if (coffee.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "coffee") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Corndogs
    if (corndogs.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "corndogs") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Crepes
    if (crepes.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "crepes") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: French fries
    if (frenchFries.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "french fries") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Fried chicken
    if (friedChicken.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "fried chicken") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Ice cream
    if (iceCream.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "ice cream") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Milkshakes
    if (milkshakes.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "milkshakes") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Nachos
    if (nachos.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "nachos") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Pasta
    if (pasta.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "pasta") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Pizza
    if (pizza.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "pizza") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Salad
    if (salad.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "salad") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Tacos/carne Asada
    if (tacosCarneAsada.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "tacos carne asada") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Tacos/cebosos
    if (tacosCebosos.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "tacos cebosos") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Tacos/pastor
    if (tacosPastor.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "tacos pastor") {
            sortedArrayOne.push(element);
          }
        });
      });
    }
    // Checkbox: Tacos/vapor
    if (tacosVapor.checked) {
      foodArray.forEach((element) => {
        element.food.forEach((item) => {
          if (item === "tacos vapor") {
            sortedArrayOne.push(element);
          }
        });
      });
    }

    console.log(sortedArray);
    span.textContent = shuffle(sortedArray)[0].name;
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

  btn.addEventListener("click", findOption);
});
