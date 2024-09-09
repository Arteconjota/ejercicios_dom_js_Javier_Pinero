/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log 
con la información del evento del click*/

const btn = document.createElement("button");
btn.id = "btnToClick";
btn.textContent = "Botón";
document.body.appendChild(btn);

btn.addEventListener("click", (evento) =>
console.log(evento));

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelectorAll(".focus");

for (const f of focus) {
    f.addEventListener("focus", (ev) =>
    console.log(f.value)
)};

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const value = document.querySelector(".value");
value.addEventListener("input", (ev) => 
console.log(value.value));

//1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
document.body.append(ul);
for (i = 0; i < albums.length; i++){
    const li = document.createElement("li");
    li.textContent = albums[i];
    ul.appendChild(li);
}