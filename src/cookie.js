/**
 * ДЗ 7.2 - Создать редактор cookie с возможностью фильтрации
 *
 * На странице должна быть таблица со списком имеющихся cookie:
 * - имя
 * - значение
 * - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)
 *
 * На странице должна быть форма для добавления новой cookie:
 * - имя
 * - значение
 * - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)
 *
 * Если добавляется cookie с именем уже существующией cookie, то ее значение в браузере и таблице должно быть обновлено
 *
 * На странице должно быть текстовое поле для фильтрации cookie
 * В таблице должны быть только те cookie, в имени или значении которых есть введенное значение
 * Если в поле фильтра пусто, то должны выводиться все доступные cookie
 * Если дабавляемая cookie не соответсвуте фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 * Если добавляется cookie, с именем уже существующией cookie и ее новое значение не соответствует фильтру,
 * то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена
 *
 * Для более подробной информации можно изучить код тестов
 *
 * Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/**
 * homeworkContainer - это контейнер для всех ваших домашних заданий
 * Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер
 *
 * @example
 * homeworkContainer.appendChild(...);
 */
let homeworkContainer = document.querySelector('#homework-container');
let filterNameInput = homeworkContainer.querySelector('#filter-name-input');
let addNameInput = homeworkContainer.querySelector('#add-name-input');
let addValueInput = homeworkContainer.querySelector('#add-value-input');
let listTable = homeworkContainer.querySelector('#list-table tbody');
let addButton = homeworkContainer.querySelector('#add-button');
let tableHtml =
    '<tr><td class="name"></td><td class="value"></td><td><button>Удалить</button></td></tr>';

import { createCookie, deleteCookie } from './index';

// function isMatching(full, chunk) {
//
//     if (chunk === '') {
//         return true;
//
//     }
//
//     for (var key in full) {
//         if (key.trim().toLowerCase().indexOf(chunk.toLowerCase()) + 1) {
//             return true;
//         }
//     }
//
//     return false;
// }

function getCookie() {
    var cookieArr = document.cookie.split('; ');
    const params = cookieArr.reduce((prev, curr) => {
        const [name, value] = curr.split('=');
        prev[name] = value;

        return prev;
    }, {});

    return params;
}

filterNameInput.addEventListener('keyup', () => {
    let filtValue = filterNameInput.value;
    let trColl = listTable.querySelectorAll('tr');
    let arrCookie = getCookie();

    for (var i = 0; i < trColl.length; i++) {
        trColl[i].remove();
    }

    for (var key in arrCookie) {
        let keyCookie = key.trim().toLowerCase().indexOf(filtValue.toLowerCase()) + 1;
        let valueCookie = arrCookie[key].trim().toLowerCase().indexOf(filtValue.toLowerCase()) + 1;

        if (keyCookie || valueCookie) {

            listTable.insertAdjacentHTML('beforeend', tableHtml);
            listTable.querySelector('tr:last-child .name').innerText = key;
            listTable.querySelector('tr:last-child .value').innerText = arrCookie[key];
            listTable.querySelector('tr:last-child').classList.add(key);
            listTable.querySelector('tr:last-child button').setAttribute('id', key);
        }
    }
});

addButton.addEventListener('click', () => {
    let names = listTable.querySelectorAll('.name');
    let nameFilter = addNameInput.value.trim().toLowerCase().indexOf(filterNameInput.value.toLowerCase()) + 1;
    let valueFilter = addValueInput.value.trim().toLowerCase().indexOf(filterNameInput.value.toLowerCase()) + 1;

    if (nameFilter || valueFilter) {
        listTable.insertAdjacentHTML('beforeend', tableHtml);
        listTable.querySelector('tr:last-child .name').innerText = addNameInput.value;
        listTable.querySelector('tr:last-child .value').innerText = addValueInput.value;
        listTable.querySelector('tr:last-child').classList.add(addNameInput.value);
        listTable.querySelector('tr:last-child button').setAttribute('id', addNameInput.value);
    }
    createCookie(addNameInput.value, addValueInput.value);

    for (var i = 0; i < names.length; i++) {
        if (names[i].innerText === addNameInput.value ) {
            names[i].nextSibling.innerText = addValueInput.value;
            listTable.querySelector('tr:last-child').remove();
        }
    }
});

listTable.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let delTr = e.target.parentNode.parentNode;
        let attr = e.target.getAttribute('id');

        delTr.remove();
        deleteCookie(attr);
    }
});
