/* ДЗ 7.1 - BOM */

/**
 * Функция должна создавать окно с указанным именем и размерами
 *
 * @param {number} name - имя окна
 * @param {number} width - ширина окна
 * @param {number} height - высота окна
 * @return {Window}
 */
function createWindow(name, width, height) {
    var newWindow = window.open('about:blank', name, "'width=" + width +",height=" + height+"'");

    return newWindow;
}

createWindow('Yes', 100, 100);


/**
 * Функция должна закрывать указанное окно
 *
 * @param {Window} window - окно, размер которого надо изменить
 */
function closeWindow(window) {
    window.close();
}

/**
 * Функция должна создавать cookie с указанными именем и значением
 *
 * @param name - имя
 * @param value - значение
 */
function createCookie(name, value) {
    let cookie = name + "=" + value;

    document.cookie = cookie;
}


/**
 * Функция должна удалять cookie с указанным именем
 *
 * @param name - имя
 */
function deleteCookie(name) {
    var date = new Date(1970);

    document.cookie = name + "=; expires=" + date + ";";
}

export {
    createWindow,
    closeWindow,
    createCookie,
    deleteCookie
};
