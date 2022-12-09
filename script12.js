let links = document.querySelectorAll(".link");
for(let el of links){
    
    el.style.color = "red";
}

//task 1
const list = document.querySelector(".list");
let text = prompt("напишите список ваших желаний");
while (text) {
    let el = document.createElement("li");
    el.textContent = text;
    list.append(el);
    text = prompt("напишите список ваших желаний");
}

//task 2
const header = document.querySelector(".header");
const textNotification = document.querySelector(".text__notification");
const sendNotification = document.querySelector(".send__notification");
function showNotification(options) {
    let div = document.createElement("div");
    div.classList.add("notification");
    div.textContent = options;
    header.append(div);
    setTimeout(() => {
        div.remove();
    }, 3000);
}
sendNotification.addEventListener("click", event => {
    let text = textNotification.value;
    if (text) {
        showNotification(text);
    }
})

//task 3
const border = document.querySelector(".border");
const img = document.querySelector(".img");

img.style.width = 200 + "px";
border.style.margin = '0 auto';

    img.style.left = Math.round(border.clientWidth / 2 - img.offsetWidth / 2) + "px";
    img.style.top = Math.round(border.clientHeight / 2 - img.offsetHeight / 2) + "px";

const coordinate = document.querySelector(".coortdinate");
border.addEventListener("click", event => {
    coordinate.textContent = "x=" + event.pageX + "\n y=" + event.pageY;
});


//task 5
let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');//добавляем элемент
    pane.firstChild.onclick = () => pane.remove();
}