//what is a callback
// A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
// Define a function that accepts a callback

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback(); // Execute the callback function
  }, 1000); // Simulate an asynchronous task with a delay of 1 second
}

// Call the fetchData function and pass a callback
fetchData(() => {
  console.log("Processing data...");
});

//callback hell
//When multiple asynchronous tasks depend on each other, nesting callbacks can make the code difficult to read, debug, and maintain. This is known as callback hell.

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);
