// Variables
const addItem = document.getElementById('add-item');
const textItem = document.getElementById('text-item');
const itemList = document.getElementById('list');

// Bouton d'ajout d'un item
addItem.addEventListener('click', function(){
    createItem(textItem.value);
    // Après avoir ajouter une tâche, efface le text
    textItem.value = "";
});

function createItem(currentText) {

    // Ne pas créer d'élément vide
    if (currentText === "")
    {
        return;
    }
    // Ajout de la div pour l'item
    const newItem = document.createElement("li");
    newItem.classList.add("item");

    // Ajout du text pour l'item
    const newTextItem = document.createElement("h3");
    newTextItem.textContent = currentText;

    // Ajout des bouttons OK et supprimer
    const newButtons = document.createElement("button");
    newButtons.classList.add("question-btn");
    // Ajout de l'icon check
    const newCheckIcon = document.createElement("span");
    newCheckIcon.classList.add("check-icon");
    const newCheckI = document.createElement("i");
    newCheckI.classList.add("fa-solid", "fa-check");
    // Ajout de l'icon xmark
    const newXmarkIcon = document.createElement("span");
    newXmarkIcon.classList.add("delete-icon");
    const newXmarkI = document.createElement("i");
    newXmarkI.classList.add("fa-solid", "fa-xmark");

    // Ajouter mes composants aux différents composants
    newItem.appendChild(newTextItem);
    newItem.appendChild(newButtons);

    newButtons.appendChild(newCheckIcon);
    newCheckIcon.appendChild(newCheckI);

    newButtons.appendChild(newXmarkIcon);
    newXmarkIcon.appendChild(newXmarkI);

    itemList.appendChild(newItem);

    // Checker la tâche
    newCheckIcon.addEventListener('click', function() {
        newItem.classList.toggle("check");
    });
    // Supprimer la tâche
    newXmarkIcon.addEventListener('click', function() {
        itemList.removeChild(newItem);
    });
}
