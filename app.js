document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn"); //Sets the find option button
  const span = document.querySelector("#result"); //Sets the span text

  //The array of food places
  const foodArray = [
    // hurtfull class means hurtfull to Fer's stomach
    // food categories:
    // burgers, fried chicken, french fries, milkshakes, nachos, tacos carne asada, tacos cebosos, pizza, boneless, pasta, crepes, corndogs, baguette, tacos pastor, tacos vapor, coffee, ice cream, salad
    {
      'name': 'carls.jr',
      'food': ['burgers', 'fried chicken', 'french fries', 'milkshakes'], 
      'hurtfull': 'yes'
    },
    {
      'name': 'nachos',
      'food': ['nachos'], 
      'hurtfull': 'no'
    },
    {
      'name': 'cotaco',
      'food': ['tacos carne asada'], 
      'hurtfull': 'no'
    },
    {
      'name': 'tacos don juan',
      'food': ['tacos cebosos'], 
      'hurtfull': 'no'
    },
    {
      'name': 'pizza bonles',
      'food': ['pizza', 'boneless'], 
      'hurtfull': 'yes'
    },
    {
      'name': 'stella rose',
      'food': ['pasta', 'crepes', 'corndogs', 'salad'], 
      'hurtfull': 'no'
    },
    {
      'name': 'jarros y tarros',
      'food': ['baguette', 'bonless', 'nachos', 'salad'], 
      'hurtfull': 'yes'
    },
    {
      'name': 'nostras',
      'food': ['pizza', 'pasta'], 
      'hurtfull': 'yes'
    },
    {
      'name': 'olivo',
      'food': ['pizza', 'pasta'],
      'hurtfull': 'yes'
    },
    {
      'name': 'tacos rosales',
      'food': ['tacos pastor'],
      'hurtfull': 'no'
    },
    {
      'name': 'tacos del chavo',
      'food': ['tacos pastor'],
      'hurtfull': 'yes'
    },
    {
      'name': 'caffenio',
      'food': ['coffee', 'milkshake']
    },
    {
      'name': 'dairy queen',
      'food': ['ice cream'],
      'hurtfull': 'yes'
    },
    {
      'name': 'mc donalds',
      'food': ['burguers', 'fried chicken', 'french fries', 'ice cream', 'milkshakes'],
      'hurtfull': 'yes'
    },
    {
      'name': 'starbucks',
      'food': ['coffee', 'milkshake'],
      'hurtfull': 'no'
    },
    {
      'name': 'little ceasars',
      'food': ['pizza'],
      'hurtfull': 'yes'
    },
    {
      'name': 'lola',
      'food': ['boneless', 'salad'],
      'hurtfull': 'yes'
    },
    {
      'name': 'manzara',
      'food': ['pasta', 'salad'],
      'hurtfull': 'no'
    }
  ];

  console.log(foodArray[])

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
