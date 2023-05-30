"use strict";
//Интервал запускает ф-ию через равные промежутки времени
/*setInterval(func, 6000);
function func() {
    console.log("Оп!");
};*/
//Другая форма записи
let a = 0;
let int = setInterval(function () {
    a++;
    console.log("Время летит в секундах " + a);
    //Прерывание интервала
    if (a == 5) {
        clearInterval(int);
    };
}, 1000);
//TimeOut
setTimeout(function () {
    console.log("Время вышло!");
}, 6000);


//Еще немного про объекты
let date = new Date();
//Запрос текущего года
console.log(date.getFullYear());
//Запрос месяца, для коректного вывода нужно прибавить один, т.к. счет начинается с 0
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log("текущее время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
let NDate = new Date();
NDate.setHours(23);
NDate.setMinutes(23);
console.log("Ненастоящее время: " + NDate.getHours() + ":" + NDate.getMinutes());

