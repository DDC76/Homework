// 4
// inside your JS file, create two variables: pizzaPlace and numberOfToppings
let pizzaPlace;
let numberOfToppings;
// 5
// Have the variables reference the name of your Pizza Place and the number of toppings
pizzaPlace = ("Dees Pizza Place");
numberOfToppings = 20; {
  console.log(pizzaPlace, typeof pizzaPlace);
  console.log(numberOfToppings, typeof numberOfToppings);
  console.log(`"Hello to ${pizzaPlace}, try any of our ${numberOfToppings} available toppings on our signature pizzas!"`);
}

numberOfToppings = 12;

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
}
else { console.log("A Whole lot of Pizza!");
}

// expected output: "Quality, not quantity if less than 10 toppings
for (let numberOfToppings = 1; numberOfToppings < 10; numberOfToppings += 2)
  if (numberOfToppings > 10) break; {
  console.log(numberOfToppings);
}
// expected output: 10

// Loop
let x = numberOfToppings;
  if (x = 1,  x <= 10,  x++) {
    console.log(numberOfToppings);
  }
  else {(x % 2 === 10); {
console.log(x);
}
