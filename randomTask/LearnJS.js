/* https://learn.javascript.ru/variables#rabota-s-peremennymi
Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»). 
*/

let admin;
let name = "Джон";
admin = name;
console.log(admin);

/*
Создайте страницу, которая спрашивает имя у пользователя и выводит его.
*/

let userName = prompt("Ваше имя?", "Jojick");
alert(userName);