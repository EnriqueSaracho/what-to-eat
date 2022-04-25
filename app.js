document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn"); //Sets the find option button
  const span = document.querySelector("#result"); //Sets the span text

  //The array of food places
  const foodArray = [
    // hurtfull class means hurtfull to Fer's stomach
    // food categories:
    // burgers, fried chicken, french fries, milkshakes, nachos, tacos carne asada, tacos cebosos, pizza, boneless,
    // pasta, crepes, corndogs, baguette, tacos pastor, tacos vapor, coffee, ice cream, salad
    {
      name: "carls.jr",
      food: ["burgers", "fried chicken", "french fries", "milkshakes"],
      unhealthy: "yes",
    },
    {
      name: "nachos",
      food: ["nachos"],
      unhealthy: "no",
    },
    {
      name: "cotaco",
      food: ["tacos carne asada"],
      unhealthy: "no",
    },
    {
      name: "tacos don juan",
      food: ["tacos cebosos"],
      unhealthy: "no",
    },
    {
      name: "pizza bonles",
      food: ["pizza", "boneless"],
      unhealthy: "yes",
    },
    {
      name: "stella rose",
      food: ["pasta", "crepes", "corndogs", "salad"],
      unhealthy: "no",
    },
    {
      name: "jarros y tarros",
      food: ["baguette", "bonless", "nachos", "salad"],
      hurtfull: "yes",
    },
    {
      name: "nostras",
      food: ["pizza", "pasta"],
      unhealthy: "yes",
    },
    {
      name: "olivo",
      food: ["pizza", "pasta"],
      unhealthy: "yes",
    },
    {
      name: "tacos rosales",
      food: ["tacos pastor"],
      unhealthy: "no",
    },
    {
      name: "tacos del chavo",
      food: ["tacos pastor"],
      unhealthy: "yes",
    },
    {
      name: "caffenio",
      food: ["coffee", "milkshake"],
      unhealthy: "no",
    },
    {
      name: "dairy queen",
      food: ["ice cream"],
      unhealthy: "yes",
    },
    {
      name: "mc donalds",
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
      name: "starbucks",
      food: ["coffee", "milkshake"],
      unhealthy: "no",
    },
    {
      name: "little ceasars",
      food: ["pizza"],
      unhealthy: "yes",
    },
    {
      name: "lola",
      food: ["boneless", "salad"],
      unhealthy: "yes",
    },
    {
      name: "manzara",
      food: ["pasta", "salad"],
      unhealthy: "no",
    },
  ];

  console.log();

  //function that shuffles and return an option from witch to eat
  function findOption() {
    span.textContent = shuffle(foodArray)[0];
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
