function addJoke(){
    JSON.stringify(fetch());
}

fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
    .then(res => res.json())
    .then(joke => {
         addJoke(joke)
         console.log(joke)  
    });