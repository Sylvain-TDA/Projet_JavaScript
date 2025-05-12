const blague = document.getElementById("blague");

var i;
var elements = document.getElementsByClassName("imageSeule");

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

function addToMyPage(joke, byUser = false) {
    // on récupére l'élément avec l'ID="blague" et on créé dans newArticle une balise article

    const newArticle = document.createElement("article");
    if (byUser) {
        newArticle.setAttribute("class", "byUser");
    }

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
    clearblague();

    // puis on recharge les blagues pour les actualiser
    for (i = 0; i < 10; i++) {
        getAJoke();
    }

    // enfin on ajoute les blagues déjà renseignées par l'utilisateur
    if (blagueSetup.value && blagueDelivery) {
        addToMyPage({ "setup": blagueSetup.value, "delivery": blagueDelivery.value });
    }
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
    addToMyPage({ "setup": blagueSetup.value, "delivery": blagueDelivery.value }, true);
    submitDone = 1;
}

function clearblague() {
    Array.from(blague.querySelectorAll('article:not(.byUser)')).forEach(element => {
        element.remove();
    });
    // console.log(blague.children);
    // if (blague.children) {
    //     Array.from(blague.children).forEach(element => {
    //         if(!element.classList.contains("byUser"))
    //             element.remove();         
    //     });
    // }
}

// Deux fonctions qui vont modifier la 
// taille de l'image lorsque l'on clique sur un bouton. 
// Soit en passant à 90% pour avoir une seule photo par ligne,
// soit en passant à 30em pour la responsivité.

function onePictureByPage() {
    for (i = 0; i < elements.length; i++)
        elements[i].style.flex = "0 0 90%";
}

function threePictureByPage() {
    for (i = 0; i < elements.length; i++)
        elements[i].style.flex = "0 0 30em";
}



