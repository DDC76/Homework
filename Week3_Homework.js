//Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["veggie", " pepperoni", " chicken", " and sausage"];

//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available
//toppings by looping over pizzaToppings. i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
  let greeting = `"Welcome to The Pizza House, our toppings are: `;
  for (let pizzaTopping of pizzaToppings) {
    greeting += `${pizzaTopping}, `;
  }
  console.log(greeting);
}

greetCustomer();

//Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
//outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...toppings) {
  let order = `"One ${size} ${crust} crust pizza with `;
  for (let pizzaTopping of pizzaToppings) {
    order += `${pizzaTopping}`;
  }
  console.log(`${order} Coming Up!`);
  return [size, crust, toppings];
}

let customerOrder = getPizzaOrder(
  "large",
  "thin",
  "sausage",
  "onions",
  "peppers"
);

//Create a preparePizza function that has an array as its parameter with three items: a size, a crust, and a list of toppings prints something like "...Cooking pizza..."
function preparePizza([orderSize, orderCrust, ...orderToppings]) {
  console.log("...Cooking Pizza...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
  console.log(preparePizza(customerOrder));
}

let cookingPizza = preparePizza(customerOrder);

//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
const pizzaObj = {
  size: "Large",
  crust: "Thin",
  toppings: "Veggie"
};
for (let key in pizzaObj) {
  console.log(`${key} = ${pizzaObj[key]}`);
}

//Create a servePizza function that has a parameter of a pizza Object,logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
//outputs the same pizza Object that was passed in

function servePizza(pizzaObj) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with`;
  for (let pizzaTopping of pizzaToppings) {
    orderReady += `${pizzaTopping},`;
  }
  console.log(`${orderReady} Order up! Here's your pizza!`);

  return pizzaObj;
}

//Call each function and (starting with preparePizza) use the returned value from the previous function as its input
