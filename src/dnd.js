/** Со звездочкой */
/**
 * Создать страницу с кнопкой
 * При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией
 * Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 * Запрощено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');
let maxWidth = 100;
let maxHeight = 100;
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

function randomVal(a) {
    var randomNumber = Math.floor(Math.random() * a);
    // console.log(randomNumber);

    return randomNumber;
}
function rgb() {

    var r =  Math.floor(Math.random() * 255);
    var g =  Math.floor(Math.random() * 255);
    var b =  Math.floor(Math.random() * 255);

    var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    return randomColor;
}

/*===============================*/

/**
 * Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 * Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 * Функция НЕ должна добавлять элемент на страницу
 *
 * @return {Element}
 */
function createDiv() {
    var div = document.createElement('DIV');

    div.classList.add('draggable-div');
    div.style.height = randomVal(maxHeight) + 'px';
    div.style.width = randomVal(maxWidth) + 'px';
    div.style.position = 'absolute';
    div.style.top = randomVal(winHeight) + 'px';
    div.style.left = randomVal(winWidth) + 'px';
    div.style.background = rgb();
    console.log(div);

    return div;
}

/*===============================*/

/**
 * Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop
 *
 * @param {Element} target
 */
function addListeners(target) {
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    let div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации d&d
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
