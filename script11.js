'use strict'


var str1 = prompt("введите массив через пробел", "");

alert(str1);

// преобразуем в массив
var arr = str1.split(' ');

var arr2 = arr.filter(item => (item >= 3 && item <= 4));
var str2=arr2.join('  ');

alert("res (>=3 <=4)= "+str2);



//task 1
let array = [];

const containerArray = document.querySelector(".container__array");
const addButton = document.querySelector(".add__button");
const addButton1 = document.querySelector(".add__button1");
const shiftButton = document.querySelector(".shift__button");
const replaceButton = document.querySelector(".replace__button");

var count = array.length;

addButton.addEventListener("click", event => {
    let block = document.createElement("div"); // создаем див
    block.classList.add("card");                       // класс карты
    let title = document.createElement("h2");  // элем аш 2
    title.classList.add("title", "title_h2");
    title.innerHTML = "товар " + count + "<img src=\"img/pil1.jpg\" width=\"100px\" height=\"100px\">"; // контент
    array.push(title.innerHTML); // кидаем в массив
    block.append(title);
    containerArray.append(block); // lj,fdkztv
    count++; // счетчик
});

addButton1.addEventListener("click", event => {
    let block = document.createElement("div");
    block.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title", "title_h2");
    title.innerHTML = "товар " + count + "<img src=\"img/pil2.jpg\" width=\"100px\" height=\"100px\">";
    array.push(title.innerHTML);
    block.append(title);
    containerArray.append(block);
    count++;
});

shiftButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild); //сносим всех детей
    }
    array.shift();  // сносим первый элемент
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block);    // заново кидаем всех детей
    }
});

replaceButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild); // сносим детей
    }
    let index = Math.floor(Math.random() * array.length); // два рандома
    let el = Math.floor(Math.random() * array.length);
    let tmp = array[index];
    array[index] = array[el]; // меняем местами
    array[el] = tmp;
    // array.splice(index, 1, array[el]);
    for (let el of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = el;
        block.append(title);
        containerArray.append(block); // заново показываем
    }
});



//task 3
const sortButton = document.querySelector(".sort__button");
let list = document.querySelectorAll(".array3");
let array3 = new Array();
for(let el of list){
    array3.push(Number(el.innerHTML)); // вносим в 3 массив
}
function compare(a, b){        // компаратор условие
    return Number(a) - Number(b);
}
sortButton.addEventListener("click", event => { // сортируем и вносим в лист
    array3.sort(compare);
    for(let i = 0; i < array3.length; i++){
        list[i].innerHTML = array3[i];
    }
});

//task 4-5
const notification = document.querySelector(".img__notification");
const listNotification = document.querySelector(".text__notification");
let counter = document.querySelector(".counter");

function counterN(){  // создает строку уведомления
    counter.style.opacity = 1;
    counter.innerHTML++;
    let el = document.createElement("li");
    el.innerHTML = "101"+counter.innerHTML % 2;
    listNotification.append(el);
}

let timerId = setTimeout( // таймер по 1 сек
    function tick(){
        counterN();
        timerId = setTimeout(tick, 1000);
    }, 1000);

notification.addEventListener("click", event => { // при клике меняем актив
    if(listNotification.classList.contains("active")){
        listNotification.classList.remove("active");
    }
    else{
        listNotification.classList.add("active");
    }


    clearTimeout(timerId);
   
    timerId = setTimeout(
        function tick(){
            counterN();
            timerId = setTimeout(tick, 1000); // промежуток 5 сек
        }, 5000);
});