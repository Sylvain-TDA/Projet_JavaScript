//-----------------------------//
//-----------DROPDOWN----------//
//-----------------------------//

// la fonction va afficher le dropdown

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function dropDownDiff() {
    document.getElementById("dropDownDiff").classList.toggle("show");
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


function facile() {
    fetch("https://mocki.io/v1/7686b35d-8a4a-424d-a5d5-f9fdbfb7f4ba ")
        .then(res => res.json())
        .then(animal => {
            addMemory(animal);
        })
    // addMemory(animal);
}

// function moyen() {
//     https://mocki.io/v1/41a37e42-afb0-4713-8ca8-db0c9d93c5c7
// }

// function difficile() {
//     https://mocki.io/v1/41a37e42-afb0-4713-8ca8-db0c9d93c5c7 
// }


function addMemory(animal) {
    const newDivMemory = document.getElementById("monMemory");
    newDivMemory.innerHTML = ""; // vider le contenu précédent

    // 1. Générer la liste d’images (avec doublons pour le memory)
    let images = [];
    for (let i = 1; i <= 5; i++) {
        images.push(animal["animal" + i]);
        images.push(animal["animal" + i]);
    }

    // 2. Mélanger le tableau images (Fisher-Yates)
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }

    // 3. Injecter dans le DOM
    for (let i = 0; i < images.length; i++) {
        newDivMemory.innerHTML += `<img src="${images[i]}" class="memoryImg" onclick="hiddenOnClick()" alt="animal">`;
    }
}

function hiddenOnClick() {
    memoryImg = document.getElementsByClassName("memoryImg")
    memoryImg.style.visibility = "visible";
}





/*----------JSON--------------*/
/*
[
  {
   "nom": "memory",
   "niveau": "moyen",
   "ID": "easy-15",
   "paires à trouver": "15",
   "nombre de tentatives tolerees": "16",
   "animal 1": "images/Memory/animal 1.jpg",
   "animal 2": "images/Memory/animal 2.jpg",
   "animal 3": "images/Memory/animal 3.jpg",
   "animal 4": "images/Memory/animal 4.jpg",
   "animal 5": "images/Memory/animal 5.jpg",
   "animal 6": "images/Memory/animal 6.jpg",
   "animal 7": "images/Memory/animal 7.jpg",
   "animal 8": "images/Memory/animal 8.jpg",
   "animal 9": "images/Memory/animal 9.jpg",
   "animal 10": "images/Memory/animal 10.jpg",
   "animal 11": "images/Memory/animal 11.jpg",
   "animal 12": "images/Memory/animal 12.jpg",
   "animal 13": "images/Memory/animal 13.jpg",
   "animal 14": "images/Memory/animal 14.jpg",
   "animal 15": "images/Memory/animal 15.jpg",
   "animal 16": "images/Memory/animal 16.jpg",
   "animal 17": "images/Memory/animal 17.jpg",
   "animal 18": "images/Memory/animal 18.jpg",
   "animal 19": "images/Memory/animal 19.jpg",
   "animal 20": "images/Memory/animal 20.jpg",
   "animal 21": "images/Memory/animal 21.jpg",
   "animal 22": "images/Memory/animal 22.jpg",
   "animal 23": "images/Memory/animal 23.jpg",
   "animal 24": "images/Memory/animal 24.jpg",
   "animal 25": "images/Memory/animal 25.jpg"
  }
]
*/