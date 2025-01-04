const form = document.getElementById('converterForm');
const usdAmount = document.getElementById('usdAmount');
const result = document.getElementById('result');
const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

form.addEventListener('submit',(event) => {
event.preventDefault();  

const usdToInrRate = 85.77;
const amount = parseFloat(usdAmount.value);
  if (!isNaN(amount)) {
    const convertedAmount = (amount * usdToInrRate).toFixed(2);
    result.textContent = `₹${convertedAmount} (INR)`;
} else {
    result.textContent = 'Please enter a valid number';
}
});