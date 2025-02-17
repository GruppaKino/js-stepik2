/*
Колбэк-функция (или обратный вызов) — это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершении какого-либо действия.

Колбэки часто используются для продолжения выполнения кода после завершения асинхронной операции. Они называются асинхронными колбэками.
*/

'use strict'

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else no()
}

ask('Вы согласны?', function() {alert('Спасибо за согласие')}, function() {alert("Вы отменили выполнение")});

/*
Функции - Колбэки

Это не отдельные типы функций!

Функции - Колбэки - это просто функция которая вызывается в качестве аргумента для параметров функций
*/