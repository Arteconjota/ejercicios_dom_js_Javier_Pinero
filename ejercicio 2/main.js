//2.1 Inserta dinamicamente en un html un div vacio con javascript.//

const emptyDiv = document.createElement("div");
document.body.append(emptyDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.//

const pDiv = document.createElement("div");
document.body.append(pDiv);
const p = document.createElement("p");
pDiv.appendChild(p);


//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.//

const sixDiv = document.createElement("div");
document.body.append(sixDiv);
for (i = 0; i <= 5; i++){
    const pa = document.createElement("p");
    sixDiv.appendChild(pa);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.//

const text = document.createElement("p");
text.textContent = "Soy dinámico!";
document.body.append(text);


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.//

const insertHere = document.querySelector("h2.fn-insert-here");
insertHere.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.//

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");
document.body.append(ul);
for (i = 0; i < apps.length; i++){
    const li = document.createElement("li");
    li.textContent = apps[i];
    ul.appendChild(li);
}

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me//

const removeMe = document.querySelectorAll(".fn-remove-me");
for (i = 0; i < removeMe.length; i++){
    removeMe[i].remove();
}

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.//

const midPa = document.createElement("p");
midPa.textContent = "Voy en medio!";
const firstDiv = document.querySelector("div");
firstDiv.after(midPa);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here//

const divInsert = document.querySelectorAll("div.fn-insert-here");
for (i = 0; i < divInsert.length; i++){
    const insideText = document.createElement("p");
    insideText.textContent = "Voy dentro!";
    divInsert[i].append(insideText);
}