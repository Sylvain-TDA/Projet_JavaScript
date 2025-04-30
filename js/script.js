const blague = document.getElementById("blague");

// fetch va chercher dans l'URL en paramètre de la fonction.
//  Ensuite, il renvoit un résultat qu'on lit en JSON. 
//  Puis avec ce résultat (qui devient joke) on envoit dans une fonction addJoke.

function getAJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
        .then(res => res.json())
        .then(joke => {
            addToMyPage(joke);
        }
        );
}

function addToMyPage(joke) {
    // on récupére l'élément avec l'ID="blague" et on créé dans newArticle une balise article

    const newArticle = document.createElement("article");

    // On créé un nouveau contenu qui contiendra la blague
    const newContent = document.createTextNode(joke.setup + ' ' + joke.delivery);

    // à la variable newArticle, on ajoute notre blague newContent
    newArticle.appendChild(newContent);

    // on déclare firstJoke qui va ajouter au premier enfant de blague
    const firstJoke = blague.firstChild;

    //on insère notre nouvelle balise article et la blague
    blague.insertBefore(newArticle, firstJoke);
}

function btnReload() {
    blague.innerHTML = "";
    for (i = 0; i < 10; i++) {
        getAJoke();
    }
}

// loop 10 times

for (i = 0; i < 10; i++) {
    getAJoke();
}


function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Ferme le menu dropdown quand l'utilisateur clic ailleur

window.onclick = function (event) {
    if (!event.target.matches('.dropdownBtn')) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const blagueEnvoi = document.getElementById("blagueEnvoi");
const jokeForm = document.getElementById("form");
jokeForm.addEventListener("submit", getJokeForm);

function getJokeForm(event) {
    event.preventDefault();
    addToMyPage({"setup": blagueEnvoi.value, "delivery": ""});
    console.log(blagueEnvoi);
}



