const { off } = require("process");

function greetCustomer() {
  console.log("Welcome to D's Pizza House, our toppings are:");

  for (let i = 0; i < pizzaToppings.length; i++) {
    console.log(pizzaToppings[i]);
  }
}

function getPizzaOrder(size, crust, toppings) {
  console.log(
    "One" + " " + size + " " + crust + " " + toppings + " " + "coming up!"
  );
}

function preparePizza(details) {
  console.log("...Cooking Pizza...");
  let pizza = { size: details[0], crust: details[1], toppings: details[2] };
  return pizza;
}

function servePizza(pizza) {
  console.log("Order up! Here's your");
  getPizzaOrder(pizza.size, pizza.crust, pizza.toppings);
}

const pizzaToppings = ["Cheese", "Pepperoni", "Sausage", "Chicken", "Veggie"];
greetCustomer();
let details = ["Small", "Thin", ["Sausage", "Cheese"]];
getPizzaOrder("Small", "Thin", ["Sausage", "Cheese"]);
let pizza = preparePizza(details);
servePizza(pizza);
