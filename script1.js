
document.getElementById('Button').addEventListener('click', function () {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const encodedExpr = encodeURIComponent(`${celsius}*9/5+32`);

    fetch(`https://api.mathjs.org/v4/?expr=${encodedExpr}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerText = `Temperature in Fahrenheit: ${data} °F`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

