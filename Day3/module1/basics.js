console.log("Hello World!");

//Basics of Javascipt

//1. Variables
var a = 10;
var b = 10;
var c = a + b;
console.log(c == 30);

//2. Functions
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

//3. Conditional Statements
var age = 18;
if (age >= 18) {
  console.log("You are an adult");
}

//4. Loops
for (var i = 0; i < 5; i++) {
  console.log(i);
}

//5. Arrays
var fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//6. Objects
var person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person.name);
console.log(person["age"]);
console.log(person.city);

//7. Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
var person1 = new Person("John", 30);
person1.greet();

//8. Arrow Functions
const add = (a, b) => a + b;
console.log(add(10, 20));
//this is the same as
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

//9. Promises
//what are promises: Promises are a way to handle asynchronous operations in JavaScript.
//what are asynchronous operations: Asynchronous operations allow a program to perform tasks in the background without blocking the main thread.
//how do promises work: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//how to create a promise: To create a promise, use the Promise constructor. The constructor takes a function as an argument, which has two parameters: resolve and reject.
//how to use promises: To use a promise, call the then method on the promise object and pass it a callback function that will be called when the promise is resolved.

function fetchQuote() {
  fetch("https://api.kanye.rest/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then((data) => {
      console.log(`Kanye Quote: "${data.quote}"`);
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}

//10. Async/Await
//what is async/await: Async/await is a modern way to handle asynchronous operations in JavaScript.
//how does async/await work: The async keyword is used to define an asynchronous function, which returns a promise. The await keyword is used to pause the execution of an async function until a promise is resolved.
//how to use async/await: To use async/await, define an async function and use the await keyword to wait for the resolution of a promise. You can use try/catch blocks to handle errors.
//how does async/await compare to promises: Async/await is a more readable and concise way to handle asynchronous operations compared to promises. It allows you to write asynchronous code that looks synchronous.
async function fetchQuote() {
  try {
    const response = await fetch("https://api.kanye.rest/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Kanye Quote: "${data.quote}"`);
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

//11. setTimeout and setInterval

//setTimeout
function sayHello() {
  console.log("Hello!");
}
setTimeout(sayHello, 2000); // Call sayHello after 2 seconds
//setInterval
function sayHello() {
  console.log("Hello!");
}
setInterval(sayHello, 1000); // Call sayHello every 1 second
