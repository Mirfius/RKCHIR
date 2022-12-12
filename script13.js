//task 1
contents.onclick = function (event) { // когда клик по контенту айди
    function handleLink(href) {
        let isLeaving = confirm(`Перейти на ${href}?`);
        if (!isLeaving) return false;
    }
    let target = event.target.closest('a'); // находим ссылку
    if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href')); //активируем ссылку
    }
};


//task 2
thumbs.onclick = function (event) { //контейнер thumbs
    let thumbnail = event.target.closest('a'); // находим  ссылку
    if (!thumbnail) return;
    showThumbnail(thumbnail.href); // вызываем функцию
    event.preventDefault();
}
function showThumbnail(href) {
    largeImg.src = href;       // заменяем ссылку на главную
}


//task 3
ul.onclick = function (event) {  // когда кликаем
    if (event.target.tagName != "LI") return;
    if (event.ctrlKey) {   // если контрл
        toggleSelect(event.target); // выделяем
    } else {
        singleSelect(event.target); // не выделяем
    }
}

ul.onmousedown = function () {
    return false;
};

function toggleSelect(li) {
    li.classList.toggle('selected'); // назначаем класс
}

function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected'); // находим выделенные
    for (let elem of selected) {
        elem.classList.remove('selected'); // удаляем класс выделенности
    }
    li.classList.add('selected'); // выделяем нужный элемент
}


//task 4
let thumb = slider.querySelector('.thumb');  // находим класс слайдера

thumb.onmousedown = function (event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = event.clientX - thumb.getBoundingClientRect().left; // находим по иксу минусуя рпозицию объекта

    document.addEventListener('mousemove', onMouseMove); // смотрим на мышь
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left; // вычисляем новую позицию

        // курсор вышел из слайдера = оставить бегунок в его границах.
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth; // вычисляем смещение
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px'; // переопределяем положение
    }

    function onMouseUp() {  // прекращаем следить за мышью
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};

thumb.ondragstart = function () {
    return false;
};


//task 5

const coordinate = document.querySelector(".coortdinate");

let cost1 =0;

let array = [];

const containerArray = document.querySelector(".magaz");


var count = array.length;

function addpil() {
    
let block = document.createElement("div"); // создаем див
block.classList.add("card");                       // класс карты
let title = document.createElement("h2");  // элем аш 2
title.classList.add("title", "title_h2");

title.innerHTML ="<img src=\"img/pil1.jpg\" id=\"1\" cost=10 draggable=\"true\" ondragstart=\"drag(event)\" width=\"10%\" style=\"margin:10%\">"; // контент



array.push(title.innerHTML); // кидаем в массив
block.append(title);
containerArray.append(block); // lj,fdkztv
count++; // счетчик  
}






let array1 = [];
const containerArray1 = document.querySelector("#myFigure");
var count1 = array.length;
function addpil1(data) {
    
    let block = document.createElement("div"); // создаем див
    block.classList.add("pane");                       // класс карты
    let title = document.createElement("div");  // элем аш 2
    title.classList.add("title", "title_h2");
    
    title.innerHTML ="<img  src=\"img/pil1.jpg\" id=\"1\" cost=10 draggable=\"true\" ondragstart=\"drag(event)\" width=\"10%\" style=\"margin:10%\">"; // контент
    cost1=cost1+10;
if (data == '2'){
    title.innerHTML ="<img src=\"img/pil2.jpg\" id=\"1\" cost=20 draggable=\"true\" ondragstart=\"drag(event)\" width=\"10%\" style=\"margin:10%\">";
    cost1=cost1+10;
}


    array1.push(title.innerHTML); // кидаем в массив
    block.append(title);
    block.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    containerArray1.append(block); // lj,fdkztv
    count1++; // счетчик  

    coordinate.textContent = "price=" + cost1;
}

let panes = document.querySelectorAll('.pane');

for (let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
}



function allowDragAndDrop(elem) {
    elem.preventDefault(); // отмена действий
}
function drag(elem) {
    elem.dataTransfer.setData("text", elem.target.id); 
}
function drop(elem) {
    elem.preventDefault();

    var data = elem.dataTransfer.getData("text");
    var box = document.querySelector("#myFigure");
    var all_cost = Number(box.getAttribute('all_cost'));

    //elem.target.appendChild(document.getElementById(data));
    //addpil();
    addpil1(data);

    for (let elem of box.children) {
        all_cost += Number(elem.getAttribute('cost'));
    }

    console.log(all_cost);
    coordinate.textContent = "price=" + cost1;
}





trait.onclick = function() {
    let start = Date.now();

    let count = 0;

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
     
        trait.style.right= timePassed / 5 + 'px';
        count=count+1;

      
      if (timePassed > 2000){
        clearInterval(timer);

      }

    }, 20);
    if (timePassed > 2000){
        t();

      }
    
  }

  









  train.onclick = function() {
    let start = Date.now();

    let count = 0;

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
     
        train.style.left = timePassed / 5 + 'px';
        count=count+1;

      
      if (timePassed > 2000){
        clearInterval(timer);

      }

    }, 20);
    if (timePassed > 2000){
        t();

      }
    
  }


function  t(){
    let start = Date.now();

    let count;

    let timer1 = setInterval(function() {
        let timePassed = Date.now() - start;
  
  
       
          train.style.right = timePassed / 5 + 'px';
          count++;
  
       
       
  
        
  
        if (timePassed > 200000){
          clearInterval(timer1);
         //t();
  
        }
        // clearInterval(timer);
  
      }, 20);

}
    

