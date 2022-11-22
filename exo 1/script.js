// --- exo 69 ---

let list = document.getElementById('liste-commissions');
let input = document.getElementById('input');
let button = document.getElementById('button');
let newElement = document.createElement('li');

newElement.innerHTML = "je suis un nouveau texte";

document.getElementById('liste-commissions').appendChild(newElement);

input.appendChild(newElement);

button.addEventListener("click", function(){
    newElement.innerHTML = input.value;
    newElement.style.listStyle = "none";
    list.appendChild(newElement);
})