// Select the button and output elements
const button = document.getElementById("myButton");
const output = document.getElementById("output");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Show a prompt to the user
  const userInput = prompt("Please enter your name:");

  // Display the input in the paragraph if it's not null
  if (userInput !== null) {
    output.textContent = `Hello, ${userInput}!`;
  } else {
    output.textContent = "You canceled the prompt.";
  }
});
// element.addEventListener("click", () => {});
