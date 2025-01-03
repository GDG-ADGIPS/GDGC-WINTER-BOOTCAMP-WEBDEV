//promises
//A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

fetchData
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// how multiple promises can be chained together
fetchData
  .then((data) => {
    console.log(data);
    return "Processing data"; //result
  })
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
