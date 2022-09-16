// inside your JS file, create two variables: pizzaPlace and numberOfToppings
// Have the variables reference the name of your Pizza Place and the number of toppings
let pizzaPlace = "Dees Pizza Place";
let numberOfToppings = 20;

// print the types of two variables that reference two different data types (typeof)
console.log(typeof pizzaPlace, typeof numberOfToppings);
// string
// number
let pizzaInfo = `Welcome to ${pizzaPlace}, try any of our ${numberOfToppings} available toppings on our signature pizzas!`;

console.log(pizzaInfo);

//let numberOfToppings = 20;

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A Whole lot of Pizza!");
}

// expected output: "Quality, not quantity if less than 10 toppings

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
