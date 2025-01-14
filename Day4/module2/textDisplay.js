// Select the input field and output paragraph
const inputField = document.getElementById("inputField");
const output = document.getElementById("output");

// Add an event listener for input changes
inputField.addEventListener("input", () => {
  // Update the output paragraph with the current input value
  output.textContent = inputField.value;
});
