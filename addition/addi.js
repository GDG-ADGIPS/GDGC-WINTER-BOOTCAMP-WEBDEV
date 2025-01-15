const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const Button = document.getElementById("addButton");
const result = document.getElementById("result");

// Add a click event listener to the button
Button.addEventListener("click", () => {
  // Parse the input values as numbers
  const value1 = parseFloat(num1.value);
  const value2 = parseFloat(num2.value);

  // Check if both inputs are valid numbers
  if (!isNaN(value1) && !isNaN(value2)) {
    // Calculate the sum and display the result
    result.textContent = `The sum is: ${value1 + value2}`;
  } else {
    result.textContent = "Please enter valid numbers in both fields.";
  }
});