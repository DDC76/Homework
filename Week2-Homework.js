const name = "Dees Pizza Place";
let numberOfToppings = 10;{
console.log('"Dees Pizza Place"  "Up to 10 Toppings"');
// "Dees Pizza Place"
// "Up to 10 Toppings"
  
console.log(typeof "Pizza");
  // expected output: "string"
  
console.log(typeof 10);
  // expected output: "number"

  console.log(typeof false);
  // expected output: "boolean"
  
  let str = "Dees Pizza Place offers up to 10 Toppings!";
  console.log(str); // Dees Pizza Place offers up to 10 Toppings!
}
if (numberOfToppings <= 10);
{
  console.log("Quality, not quantity.");
}
// expected output: "Quality, not quantity if less than 10 toppings
for (let numberOfToppings = 1; numberOfToppings < 10; numberOfToppings += 2)
  if (numberOfToppings > 10) break;
{
  console.log(numberOfToppings);
}
// expected output: 10
