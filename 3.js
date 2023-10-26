"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/


const n1 = prompt("Введите первое число");
const n2 = prompt("Введите второе число");
const n3 = prompt("Введите третье число");

function maxValue(n1, n2, n3) {
    let myMax = Math.max(n1, n2);
    myMax = Math.max(n3, myMax);
    console.log(`Максимальное значение среди чисел ${n1}, ${n2}, ${n3} равно ${myMax}.`);
}

maxValue(n1, n2, n3);