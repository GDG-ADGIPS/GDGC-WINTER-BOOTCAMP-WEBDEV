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
fetchQuote();
// function fetchQuote() {
//   fetch("https://api.kanye.rest/")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json(); // Parse the JSON response
//     })
//     .then((data) => {
//       console.log(`Kanye Quote: "${data.quote}"`);
//     })
//     .catch((error) => {
//       console.error("Error fetching quote:", error);
//     });
// }
// fetchQuote();
