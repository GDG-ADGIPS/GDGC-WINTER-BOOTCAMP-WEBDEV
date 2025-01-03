const element = document.getElementById("example");

// Get content using textContent
console.log(element.textContent);
// Output: "Hello, world!"

// Set content using textContent
element.textContent = "Hi there, <em>everyone</em>!";
console.log(element.textContent);
// Output: "Hi there, <em>everyone</em>!" (treated as plain text)
