//----var Feed blague---//

const blague = document.getElementById("blague");
const myJoke = document.getElementsByClassName("byUser");


//-----------------------------//
//-----------DROPDOWN----------//
//-----------------------------//

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

//-------------------------------------//
//------------FEED BLAGUE--------------//
//-------------------------------------//

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
    
    //on créé une variable qui créé un bouton
    
    // const ajoutBoutton = element.innerHTML = "<button>Me supprimer</button>";
    
    if (byUser) {
        newArticle.setAttribute("class", "byUser");
        newArticle.setAttribute("id", "toDelete");
        newArticle.innerHTML = "<button class=\"delete\" onclick=\"deleteMyJoke()\">Me supprimer</button>";
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
    if (blagueSetup.value && blagueDelivery.value) {
        addToMyPage({"setup": blagueSetup.value, "delivery": blagueDelivery.value});
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
}

function clearblague() {
    Array.from(blague.querySelectorAll('article:not(.byUser)')).forEach(element => {
        element.remove();
        // blagueSetup = "";
        // blagueDelivery = "";
    });
    // console.log(blague.children);
    // if (blague.children) {
    //     Array.from(blague.children).forEach(element => {
    //         if(!element.classList.contains("byUser"))
    //             element.remove();         
    //     });
    // }
}

// loop 10 times

for (i = 0; i < 10; i++) {
    getAJoke();
}

// fonction pour supprimer la blague créée

function deleteMyJoke() {
    document.getElementById("toDelete").remove();
}


























// //------------------------------------//
// //-------------GALERIE----------------//
// //------------------------------------//

// //----var Galerie---//

// var i;
// var imageGalerie = document.getElementsByClassName("imageSeule");

// // Deux fonctions qui vont modifier la 
// // taille de l'image lorsque l'on clique sur un bouton. 
// // Soit en passant à 90% pour avoir une seule photo par ligne,
// // soit en passant à 30em pour la responsivité.

// function onePictureByPage() {
    //     for (i = 0; i < imageGalerie.length; i++)
    //         imageGalerie[i].style.flex = "0 0 90%";
    // }
    
    // function threePictureByPage() {
        //     for (i = 0; i < imageGalerie.length; i++)
        //         imageGalerie[i].style.flex = "0 0 30em";
// }

// // creation d'une fonction d'ajout d'image qui s'active lorsque l'utilisateur charge une image

// function ajoutImage() {
//     //définition de l'emplacement auquel on ajoute l'image
//     const imagePlace = document.getElementById("images");

//     //définition de là où la photo téléchargée
//     const input = document.getElementById('userImage');

//     //on prend uniquement le fichier uploadé 
//     const imageUploaded = input.files;
   
//     //boucle qui fonctionne si l'image uploadé est supérieur à 0
//     if (imageUploaded.length > 0) {

//         // on crée une balise img
//         const img = document.createElement("img");

//         //on spécifie la source
//         img.src = URL.createObjectURL(imageUploaded[0]);
//         img.style.width = "90%";

//         //on ajoute l'image au début de l'élément
//         imagePlace.prepend(img);
//     } else {
//         console.log("Aucun fichier sélectionné.");
//     }
// }