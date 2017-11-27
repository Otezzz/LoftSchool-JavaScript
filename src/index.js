/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], [i], array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray.push(fn(array[i], [i], array));
    }

    return newArray;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */

function reduce(array, fn, initial) {
    var i = 0;

    if (!initial) {
        initial = array[0];
        i = 1;
    }
    for (i; i < array.length; i++) {
        initial = fn(initial, array[i], [i], array);
    }

    return initial;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */

function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    if (prop in obj) {
        console.log("Свойство name существует!");

        return true;
    }

    return false;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */

function getEnumProps(obj) {
    return Object.keys(obj);
}


/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */

var obj = {
    name: 10,
    fame: 20
};

function upperProps(obj, prop) {
    var propArr = [];

    for (prop in obj) {
        propArr.push(prop.toUpperCase());
    }

    console.log(propArr);

    return propArr;
}
// upperProps(obj);

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */

var array = [1, 2, 3, 4, 5, 6, 7];

function slice(array, from, to) {
    var i = from;
    var result = [];

    try {

        if (from >= to && from !== 0) {
            throw new Error("от больше или равно до");
        }
        if (from > array.length && to === undefined) {
            throw new Error("от больше длинны массива");
        }
    }   catch (err) {
        console.log(err.message);

        return result;
    }

    if (from === undefined && to === undefined) {
        return array;
    }
    if (to === undefined) {
        to = array.length;
    }
    if (to < 0) {
        to = to + array.length;
    }
    if (to > array.length) {
        to = array.length;
    }
    if (Math.abs(from) > array.length) {
        i = 0;
    }


    for (i; i < to; i++) {
        result.push(array[i]);
    }

    console.log(result);
    return result;
}

slice(array);

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */

function createProxy(obj) {
    var objHandler = {
        set(target, prop, value) {
            target[prop] = value * value;
            console.log(target[prop]);

            return target[prop];
        }
    };

    return new Proxy(obj, objHandler);
}

createProxy(obj);


export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
