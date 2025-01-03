const button = document.getElementById('getQuote');
const quoteElement = document.getElementById('quote');
console.log(quoteElement.innerHTML);
async function fetchQuote() {
    try {
        const response = await fetch('https://api.kanye.rest');
        const data = await response.json();
        console.log(data)
        quoteElement.textContent = `${data.quote}`;
    } catch (error) {
        quoteElement.textContent = "Sorry";}
}

button.addEventListener('click', fetchQuote);