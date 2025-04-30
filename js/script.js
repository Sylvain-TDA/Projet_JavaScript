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

// cette fonction va charger dans la page la blague récupérée avec le fetch.

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

// cette fonction va gérer le rafraîchissement de la page au click sur le bouton actualiser

function btnReload() {
    // on remplace par du texte vide dans la balise où va être effectuée la fonction
    blague.innerHTML = "";

    // puis on recharge les blagues pour les actualiser
    for (i = 0; i < 10; i++) {
        getAJoke();
    }

    // enfin on ajoute les blagues déjà renseignées par l'utilisateur
    addToMyPage({"setup": blagueSetup.value, "delivery": blagueDelivery.value});
}

// loop 10 times

for (i = 0; i < 10; i++) {
    getAJoke();
}

// la fonction va afficher le dropdown

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

// gestion des input text comme blague

const blagueSetup = document.getElementById("blagueSetup");
const blagueDelivery = document.getElementById("blagueDelivery");
const jokeForm = document.getElementById("form");

//à la submission (submit), on lance la fonction getJokeForm
jokeForm.addEventListener("submit", getJokeForm);

function getJokeForm(event) {
    // pour éviter le rafraichissement de la page
    event.preventDefault();
    addToMyPage({"setup": blagueSetup.value, "delivery": blagueDelivery.value});
}