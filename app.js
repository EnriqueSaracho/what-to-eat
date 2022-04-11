document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn"); //Sets the find option button
  const span = document.querySelector("#result"); //Sets the span text

  //The array of food places
  const foodArray = [
    "Carls.jr",
    "Nachos",
    "Cotaco",
    "Tacos de Don Juan",
    "Pizza Bonles",
    "Stella Rose",
    "Jarros y Tarros",
    "Nostras",
    "Olivo",
  ];

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
