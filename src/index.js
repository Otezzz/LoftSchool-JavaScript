/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */

var array = [10, null, 22];
function isAllTrue(array, fn) {

    if ((array.length === 0) || !(array instanceof Array)) {
        throw new Error('empty array');
    }
    if (typeof(fn) !== 'function') {
        throw new Error('fn is not a function');
    }

    for (var i = 0; i < array.length; i++) {
        if (!fn(array[i])) {
            return false;
        }
    }
    return true;
}
function fn(a) {
    if (a) {
        return true;
    } else {
        return false;
    }
}


/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */

var array2 = [10, null, 22];
function isSomeTrue(array2, fn2) {

    if ((array2.length === 0) || !(array2 instanceof Array)) {
        throw new Error('empty array');
    }
    if (typeof(fn2) !== 'function') {
        throw new Error('fn is not a function');
    }

    for (var i = 0; i < array2.length; i++) {
        if (fn2(array2[i])) {
            return true;
        }
    }
    return false;
}
function fn2(a) {
    if (a) {
        return true;
    } else {
        return false;
    }
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn3) {
    var arrElem = [];

    if (typeof fn3 !== 'function') {
        throw new Error('fn is not a function');
    }
    if (arguments.length === 1) {
        return arrElem = [];
    }

    for (var i = 1; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (fn3(arguments[i])) {
            arrElem.push(arguments[i]);
        }
    }
    console.log(arrElem);
}

function fn3(a) {
    return (a % 2);
}

returnBadArguments(fn3, 12, 54, 11, 42, 15, 17);

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */

function calculator(number) {
    if (!number) {
        number = 0;
    }
    if (typeof number !== 'number') {
        throw new Error('number is not a number');
    }

    var mathObj = {
        sum: function () {
            for (var i = 0; i < arguments.length; i++) {
                number += arguments[i];
                console.log(number);
            }

            return number;
        },
        dif: function () {
            for (var i = 0; i < arguments.length; i++) {
                number -= arguments[i];
                console.log(number);
            }

            return number;
        },
        div: function () {
            for (var i = 0; i < arguments.length; i++) {
                if (number === 0 || arguments[i] === 0) {
                    throw new Error('division by 0');
                }
                number /= arguments[i];
                console.log(number);
            }

            return number;
        },
        mul: function () {
            for (var i = 0; i < arguments.length; i++) {
                number *= arguments[i];
                console.log(number);
            }

            return number;
        }
    };

    return mathObj;
}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
