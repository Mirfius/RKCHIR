"use strict";
/* */

while (true) {
    let answer = prompt("Желаете пройти регистрацию на сайте?", "");
    if ((answer == "Да") || (answer == "да")|| (answer == "yes")) {
        alert("Круто");
        break;
    }
    else {
        alert("Попробуй ещё раз");
    }
}

while (true) {
    let login = prompt("Введите ваш логин");
    let password;
    if ((login == "Админ" ) || (login == "админ")|| (login == "admin")) {
        while(true){
            password = prompt("Введите пароль");
            if (!password) {
                alert("Отменено");
                break;
            } else if (password == "1234") {
                alert("Приветствую модератор!");
                break;
            } else {
                alert("Неверный пароль");
            }
        }
        break;
    } else if (!login) {
        alert("Отменено");
        break;
    } else {
        alert("Я вас не знаю");
    }
}
  /*     */
let button = document.querySelector(".red__button");  /*находим красную кнопку */
button.addEventListener("click", event => {     /*всякий раз когда кликаем */
    if(button.style.backgroundColor === "pink"){
        button.style.backgroundColor = "gray";
        button.style.color = "aliceblue";
        button.innerHTML = "♥";
    } else{
        button.innerHTML += " 1";
        button.style.backgroundColor = "pink";
        button.style.color = "red";
    }
});


let containerCreate = document.querySelector(".container__create"); /*находим контейнер */
let main = document.main;

let create = document.querySelector(".create__buttons"); /*находим класс */
create.addEventListener("click", event => { /*если нажали */
    if(create.classList.contains("active")){   /*если активна */
        while((containerCreate.lastElementChild) ){  /*пока есть дети */
            containerCreate.removeChild(containerCreate.lastElementChild);  /*удаляем детей */
        }
        create.classList.remove("active"); /*делаем неактивной */
    }
    else{
        create.classList.add("active");  /*делаем активной */
    }
});
let x = 0;
let y = 0;

containerCreate.addEventListener('mousemove', (event) => { /*если мышь двигается */

    let newButton = document.createElement("a");
    let localY = event.pageY - containerCreate.getBoundingClientRect().top;  /*вычисляем смещение */
    let localX = event.pageX - containerCreate.getBoundingClientRect().left;

    if(create.classList.contains("active") && Math.abs(x - localX) > 10 && Math.abs(y - localY) > 10){ /*если активна и есть смещение */
        newButton.text = "Button";
        newButton.classList.add("create__buttons");
        newButton.classList.add("created__button");
       
        
        newButton.style.top = `${localY}px`;
        newButton.style.left = `${localX}px`;
        containerCreate.append(newButton);
        x = localX;
        y = localY;
    }
  });