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

//----var Galerie---//

var i;
let compteur = 0;

//------------------------------------//
//-------------GALERIE----------------//
//------------------------------------//


// creation d'une fonction d'ajout d'image qui s'active lorsque l'utilisateur charge une image

function ajoutImage() {
    //définition de l'emplacement auquel on ajoute l'image
    const imagePlace = document.getElementById("images");

    //définition de là où la photo téléchargée
    const input = document.getElementById('userImage');

    //on prend uniquement le fichier uploadé 
    const imageUploaded = input.files;

    //boucle qui fonctionne si l'image uploadé est supérieur à 0
    if (imageUploaded.length > 0) {

        // on crée une balise img
        const img = document.createElement("img");

        //on spécifie la source
        img.src = URL.createObjectURL(imageUploaded[0]);
        img.style.width = "90%";
        img.className = "imageSeule";
        img.alt = `ajout utilisateur-${compteur}`;
        img.onclick = "deleteMyImage()";

        //on ajoute l'image au début de l'élément
        imagePlace.prepend(img);
    } else {
        console.log("Aucun fichier sélectionné.");
    }
}

// Deux fonctions qui vont modifier la 
// taille de l'image lorsque l'on clique sur un bouton. 
// Soit en passant à 90% pour avoir une seule photo par ligne,
// soit en passant à 30em pour la responsivité.

function onePictureByPage() {
    var imageGalerieOne = document.getElementsByClassName("imageSeule");
    for (i = 0; i < imageGalerieOne.length; i++)
        if (imageGalerieOne[i]) {
            imageGalerieOne[i].style.flex = "0 0 90%";
            imageGalerieOne[i].style.width = "90%";
        }
}

function threePictureByPage() {
    var imageGalerieThree = document.getElementsByClassName("imageSeule");
    for (i = 0; i < imageGalerieThree.length; i++)
        if (imageGalerieThree[i]) {
            imageGalerieThree[i].style.flex = "0 0 30em";
            imageGalerieThree[i].style.width = "30em";
        }
}

// Supprimer l'image ajouter par l'utilisateur

function deleteMyImage() {
    const imgToDelete = document.querySelector(`img[alt="ajout utilisateur-${compteur}"]`);
    imgToDelete.remove();
}

//-------CAROUSSEL-----------//

let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  setTimeout(showSlides(n), 2500);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2500); // Change image every 2 seconds
} 

