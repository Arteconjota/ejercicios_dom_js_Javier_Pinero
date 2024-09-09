//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.//

const paises = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
document.body.append(ul);
for (pais of paises){
	const li = document.createElement("li");
	li.textContent = pais;
	ul.appendChild(li);
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.//

const removeMe = document.querySelector(".fn-remove-me");
removeMe.remove();

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".//

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]');
const ulTwo = document.createElement("ul");
div.appendChild(ulTwo);
for (car of cars){
	const liTwo = document.createElement("li");
	liTwo.textContent = car;
	ulTwo.appendChild(liTwo);
}

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.//

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (country of countries){
	const divImg = document.createElement("div");
	divImg.className = "serieDivs"
	document.body.append(divImg);
	const h4 = document.createElement("h4");
	h4.textContent = country.title;
	divImg.appendChild(h4);
	const img = document.createElement("img");
	img.src = country.imgUrl;
	divImg.appendChild(img);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.//

const btn = document.createElement("button");
btn.textContent = "Elimina el último div";
document.body.appendChild(btn);
const serie = document.querySelectorAll(".serieDivs");
const lastDiv = serie[serie.length - 1];

btn.addEventListener("click", () =>
lastDiv.remove());

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.//

for (let i = 0; i < serie.length; i++) {
	const elim = document.createElement("button");
	elim.textContent = "Elimina este div";
	serie[i].appendChild(elim);
	elim.addEventListener("click", () =>
	serie[i].remove());
}