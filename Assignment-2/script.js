function runner(){
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(async res => {
            const json = await res.json()
            document.getElementById("texthere").innerHTML = json.joke
        })
}