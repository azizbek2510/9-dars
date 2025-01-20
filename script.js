const ism = prompt("Ismingizni kiriting:");
const familiya = prompt("Familiyangizni kiriting:");
const yosh = prompt("Yoshingizni kiriting:");

const container = document.createElement("div");
container.classList.add("info-container");

const newTag = document.createElement("p");
const newLink = document.createElement("p");
const newItem = document.createElement("p");

newTag.textContent = `1. Ism: ${ism}`;
newLink.textContent = `2. Familya: ${familiya}`;
newItem.textContent = `3. Yosh: ${yosh}`;

container.appendChild(newTag);
container.appendChild(newLink);
container.appendChild(newItem);

document.body.appendChild(container);
















































































































// const ism = prompt("Iltimos, ismingizni kiriting:");
// const familiya = prompt("Iltimos, familiyangizni kiriting:");
// const yosh = prompt("Iltimos, yoshingizni kiriting:");

// // Create elements
// const newTag = document.createElement("h1");
// const newLink = document.createElement("p");
// const newItem = document.createElement("a");

// newTag.textContent = `Ism: ${ism}`;
// newLink.textContent = `Familiya: ${familiya}`;
// newItem.textContent = `Yosh: ${yosh}`;

// newItem.href = "#"; 

// document.body.appendChild(newTag);
// document.body.appendChild(newLink);
// document.body.appendChild(newItem);










// const num1 = +prompt("birinchi raqam kiriting")
// const num2 = +prompt("ikkinchi raqam kiriting")


// const ism = prompt("Iimingizni Kiriting")
// const newTag = document.createElement("h1")


// const familiya = prompt("familiya Kiriting")
// const newLink = document.createElement("p")


// const yosh = prompt("yosh Kiriting")
// const newItem = document.createElement("a")

// document.body.append(ism, familiya, yosh);