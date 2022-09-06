//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["veggie", "pepperoni", "chicken", "sausage"];
for (let pizzaTopping of pizzaToppings) {
  console.log(pizzaTopping);
}

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available
//toppings by looping over pizzaToppings. i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  console.log(`"Welcome to The Pizza House, our toppings are: "${pizzaToppings}"`);
  }
  for (let i = 0; i < pizzaToppings[`...Params`]; i++) {
  console.log(pizzaToppings[i]);
  }

  greetCustomer();

  //Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings

function getPizzaOrder(param1, param2, ...param3) {
  console.log(`"One  ${param1}   ${param2}   ${param3}  pizza coming up!"`);
}
getPizzaOrder("Large", "Thin", "Cheese");

//Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."

function preparePizza(param1, param2, ...param3) {
  console.log("...Cooking Pizza...");
  let pizza = {size: "details[0]", crust: "details[1]", toppings: "details[2]"};
  return pizza;
}
preparePizza();

//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

const pizzaObj = {
  size: 'Large',
  crust: 'Thin',
  toppings: 'Veggie',
}
for (let key in pizzaObj) {
  console.log(`${key} = ${pizzaObj[key]}`);
}

//Create a servePizza function that
//has a parameter of a pizza Object
//logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in

function servePizza() {
  console.log("Order up! Here's your pizza!");
}
servePizza();

//Call each function and (starting with preparePizza) use the returned value from the previous function as its input

greetCustomer();
let details = ["Small", "Thin", ["Sausage", "Cheese"]];
getPizzaOrder("Large", "Thin", "Cheese");
preparePizza();
servePizza();

let pizza = { size: details[0], crust: details[1], toppings: details[2] }; {
return pizza;
}
