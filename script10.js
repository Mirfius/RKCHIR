'use strict'
// Task 1
const textCapture = document.querySelector(".text");
const checkButton = document.querySelector(".check__button");
const disabledButton = document.querySelector(".disabled__button");
const answer = document.querySelector(".text__capture");


function getRandomInt(max) {    // рандом с параметром максимума
    return Math.floor(Math.random() * max);
}
function click1(){
    count = false;
    console.log(count);
    if(answer.value == textCapture.innerHTML){
        disabledButton.disabled = false;          // отменяем отключенность
    }else{
        capture();
    }
}
var count = true;
function capture(){
    if(count){
        const abc = "abcdefghijklmnopqrstuvwxyz";
        while (textCapture.innerHTML.length < 3) {
            textCapture.innerHTML += abc[Math.floor(Math.random() * abc.length)]; // генерируем строку из строки букв
        }
        checkButton.addEventListener("click", click1);
    }else{
        let numb1 = getRandomInt(10);                // если первый выбор неверен
        let numb2 = getRandomInt(10);
        textCapture.innerHTML = numb1 + " + " + numb2;
        checkButton.removeEventListener("click", click1);
        checkButton.addEventListener("click", event => {
            if(Number(answer.value) === numb1 + numb2){  // если пример решен
                disabledButton.disabled = false;   // отменяеме отключенность
            }
            else{
                capture();
            }
        });
    }

}
capture();








// Task 2
const list = document.querySelector(".text__basket");

const position = document.querySelectorAll(".title_position");

function Basket(position){   // обнуляем позиции класса  title_position
    for(let el of position){
        this[el.textContent] = 0;
    }
}

let basket = new Basket(position);  //создаем объект

let basketButton = document.querySelector(".img__basket"); //определяем кнопки добавления
basketButton.addEventListener("click", event => {
    if(basketButton.classList.contains("active")){ //если актив
        basketButton.classList.remove("active");
        while(list.lastElementChild){
            list.removeChild(list.lastElementChild);   //удаляем детей
        }
    }else{
        basketButton.classList.add("active");
        for(let el in basket){                     //смотрим все позиции из заданного клааса
            if(basket[el] != -1){
                let text = document.createElement("li");  //создаем список
                text.innerHTML = el + ": " + basket[el];
                list.append(text);                           //добавляем в текст
            }
        }
    }
});

const inputs = document.querySelectorAll(".volume");
const buttons = document.querySelectorAll(".button");

for(let button of buttons){                             //проходимся по всем кнопкам класса
    button.addEventListener("click", event => {
        for(let name of button.classList){
            for(let input of inputs){
                if((input.classList.contains(name)) ||(input.classList.contains(name))){ //если инпут содержит название
                    if(name == "red"){
                        basket["красная таблетка"] += Number(input.value);  //переопределяем баскет
                    }else if(name == "blue"){
                        basket["синяя таблетка"] += Number(input.value);
                    }
                    obnovit ();
                    
                }
            }
        }
    });
}


let button1 = document.querySelector(".del__button");  /*находим красную кнопку */

button1.addEventListener("click", event => {     /*всякий раз когда кликаем */
basket["красная таблетка"] = Number(0);
basket["синяя таблетка"] = Number(0);
obnovit ();


});

function obnovit (){
    let basketButton = document.querySelector(".img__basket");
    if(basketButton.classList.contains("active")){
        basketButton.classList.remove("active");
        while(list.lastElementChild){
            list.removeChild(list.lastElementChild);
        }
        basketButton.classList.add("active");
        for(let el in basket){
            if(basket[el] != -1){
                let text = document.createElement("li");
                text.innerHTML = el + ": " + basket[el];
                list.append(text);
            }
        }
    }


}



// Task 3
const descriptions = document.querySelectorAll(".decription");
for(let el of descriptions){
    el.innerHTML = truncate(el.innerHTML, 200);
}
function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength - 3) + "...";
    }
    return str;
}