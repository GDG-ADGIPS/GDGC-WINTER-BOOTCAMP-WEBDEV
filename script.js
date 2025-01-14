const button = document.getElementById("getQuote");
const quoteElement = document.getElementById("quote");
async function fetchQuote() {
  try {
    const response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    quoteElement.textContent = `"${data.quote}"`;
  } catch (error) {
    quoteElement.textContent = "Sorry, we couldn't fetch a quote. Try again later.";
  }
}
button.addEventListener("click", fetchQuote);