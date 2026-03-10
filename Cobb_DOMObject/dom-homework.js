const div = document.getElementById("myDiv");

const h1 = document.createElement("h1");
h1.textContent = "Welcome to DOM homework.";
div.appendChild(h1);

const p = document.createElement("p");
p.textContent = "This is your first DOM homework assignment.";
div.appendChild(p);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "I'm currently learning C++.";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "I just received a STM32 Nucleo-64 development board.";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "I'm excited to learn how to use it.";
ul.appendChild(li3);
div.appendChild(ul);

h1.classList.add("highlight");
document.getElementsByClassName("highlight")[0].style.backgroundColor = "lightblue";

const button = document.createElement("button");
button.textContent = "Add new list item";
let count = 0;
button.addEventListener("click", () => {
    const newLi = document.createElement("li");
    count++;
    newLi.textContent = `New List Item ${count}`;
    newLi.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    ul.appendChild(newLi);
});
div.appendChild(button);

div.addEventListener("click", () => {
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
});