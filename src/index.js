/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg;
}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {
    if (!b) {
        b = 100;
    }

    return a + b;
}

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
    var arr = [];

    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }

    return arr;
}

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    return fn();
}
function fn() {
    return (10 + 10);
}
returnFnResult(fn);

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number) {
    if (!number) {
        number = 0;
    }

    return function f() { number++; return number };
}

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */

function bindFunction(fn) {
    var argArr = [];

    for (var i = 1; i < arguments.length; i++) {
        argArr.push(arguments[i]);
    }

    return function() {
        return fn.apply(null, argArr);
    }
}

// function fn3 () {
//     console.log(arguments);
// }
//
// bindFunction(fn3, 10, 20, 30);

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
