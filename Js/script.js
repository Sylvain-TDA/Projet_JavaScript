//let printjoke = "";


// fetch va chercher dans l'URL en paramètre de la fonction.
//  Ensuite, il renvoit un résultat qu'on lit en JSON. 
//  Puis avec ce résultat (qui devient joke) on envoit dans une fonction addJoke.

function getAJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
        .then(res => res.json())
        .then(joke => {

            // Cette fonction prend en paramètre le JSON de fetch.
            // On déclare printjoke à vide puis si le fetch renvoit une blague en une seule ligne (twopart) 
            // -> printjoke devient la partie "joke" du JSON.
            // Sinon, il imprime la première partie de la blague (setup) puis la seconde (delivery)

            // if (joke.type == "twopart") {

            //     printjoke = joke.setup + joke.delivery;
            //     console.log(printjoke)
            // } else {
            //     printjoke = joke.joke;
            //     console.log("twopart")
            // }
            addToMyPage(joke);
        }
        );
}

function addToMyPage(joke) {

    const blague = document.getElementById("blague");
    const newDiv = document.createElement("article");

    // On créé un nouveau texte
    const newContent = document.createTextNode(joke.setup + ' ' + joke.delivery);

    newDiv.appendChild(newContent);
    
    const firstJoke = blague.firstChild;

    blague.insertBefore(newDiv, firstJoke);    
}


// loop 10 times

for (i = 0; i < 10; i++) {
    getAJoke();
}









