// Activity 1

// 1.a
// Declare a function called helloWorld that prints out the string "Hello World"
function helloWorld(); {
  console.log("Hello World");
}
// Invoke the helloWorld function
helloWorld();

// 1.b
// Declare a function called numSum
// This is the requirements of the function:
//    This is the requirements of the function:
//    Accepts 2 parameters
//    Inside the function, add the parameters together
//    The function will print out a string that says: <1st parameter> plus <2nd parameter> equals sum
//    The function will output the sum of the two parameters
// Hints: you will need to use template literals to print out the string
//        there is no one right way to do this, but don't overthink it

// Invoke the function inside of a console.log so we can see the returned value
function numSum(num1, num2) {
  let sum = num1 + num2;
  console.log(`${num1} plus ${num2} equals ${sum}`);
  return sum;
}

console.log(numSum(10, 15));
numSum(5, 7);
console.log(sum);

// NOTES FOR MICHEAL WEBB:
function printParams(...params) {
  for (let param of params) {
    console.log(param);
  }
  return params;
}
printParams("First", "Second", "Third", "Apple");

// 2.a
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use
function testAverage(...params) {
  let sum = 0;
  for (let param of params) {
    sum += param;
}
return sum / params.length;

}

//OR

function testAverage(...scores) {
  let total = 0;
  for (let score of scores) {
    total += score;
  }
  return total / scores.length;

// Invoke testAverage with the following parameters: 92, 71, 85, 83
console.log(testAverage(92, 71, 85, 83));


// 2.b
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 90, print "Your grade is an A, great job!" then output false
//    if argument is greater than or equal to 80 but less than 90, print "Your grade is B, nice job!" then output false
//    if argument is greater than or equal to 70, print "Your grade is a C, extra studying required" then output true
//    if argument is less than 70, print "Uh oh." then output true
function gradeCheck(grade) {
  if (grade >= 90) {
    console.log(`${grade} is an A, great job!`);
    return false;
  }
  if (grade >= 80) {
    console.log(`${grade} is a B, nice job!`);
    return false;
  }
  if (grade >= 70) {
    console.log(`${grade} is a C, extra studying required.`);
    return true;
  }
  if (grade < 70) {
    console.log(`${grade}. Uh oh.`);
    return true;
  }
}

// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before
gradeCheck(testAverage(92, 71, 85, 83)); // 82.75 is a B, nice job!
gradeCheck(testAverage(52, 71, 55, 44)); // 55.5. Uh oh.

// ANSWERS TO ACTIVITY 3

// Declare a variable called resultOne and assign it to the invocation you did for 2.b
// this will look something like this: let resultOne = gradeCheck(testAverage());
// Declare a variable called resultTwo and assign it to an invocation of testAverage with the arguments of 52, 71, 55, 44
// this will look like this: let resultTwo = gradeCheck(testAverage(52, 71, 55, 44));
// Declare a function called summerPlans
//  These are the requirements of the function:
//    Accepts two parameters: name and outcome (result will be passed as an argument through outcome)
//    Inside the function, create an object called student
//    this object will have two properties with keys name and school
//    set the value of the name key to be the name parameter
//    set the value of the school key to be the outcome parameter
//    set up an if conditional that examines if outcome is true/false
//    if true, print "<student name>'s will be attending summer school."
//    if false, print "<student name>'s will be going on vacation this summer!"
// Hint, you will need to utilize both dot notation and template literals to properly set up these conditions and what they print

let resultOne = gradeCheck(testAverage(92, 71, 85, 83));
let resultTwo = gradeCheck(testAverage(52, 71, 55, 44));

function summerPlans(studentName, outcome) {
  let student = {
    name: studentName,
    school: outcome
  };
  if (student.school == true) {
    console.log(`${student.name} will be attending summer school.`);
  }
  if (student.school == false) {
    console.log(`${student.name} will be going on vacation this summer!`);
  }
}
// Invoke summerPlans with a name of your choice and the result variable
summerPlans("Steve", resultOne); // Steve will be going on vacation this summer!
summerPlans("Bob", resultTwo); // Bob will be attending summer school.
