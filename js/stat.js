'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomColor = function (hue) {
  return 'hsl(' + hue + ', ' + Math.random() * 100 + '%, 50%)';
};


var window = {
  renderStatistics: function(ctx, var names = [Вы], times[]) {

  }
}

// DOM-элемент канваса
var canvas = document.getElementById('canvas'); //получить доступ к самому тегу <canvas>, например, с помощью метода getElementById.

// Контекст отрисовки
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(100, 10, 270, 420);

ctx.fillStylef = 'rgba(0, 0, 0, 0.7)';
ctx.fillRect(110, 20, 270, 420);

ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
                       Math.floor(255-42.5*j) + ',0)';

function randomRgbaString (alpha) {
  let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
  }


  function generateHslaColors (saturation, lightness, alpha, amount) {
    let colors = []
    let huedelta = Math.trunc(360 / amount)

    for (let i = 0; i < amount; i++) {
      let hue = i * huedelta
      colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
    }

    return colors
  }


  var getBlueWithRandomSaturation = function() {
    return 'hsl(240, ' + getRandom(100) + '%, 50%)';
  }

// Задача
// В новом файле js/stat.js определите функцию renderStatistics,
// которая будет являться методом объекта window, со следующими аргументами:

// ctx — канвас на котором рисуется игра.
// names — массив, с именами игроков прошедших уровень. Имя самого игрока — Вы.
// Массив имён формируется случайным образом.
// times — массив, по длине совпадающий с массивом names.
// Массив содержит время прохождения уровня соответствующего игрока из массива names.
// Время прохождения уровня задано в миллисекундах.
// Эта функция будет вызываться каждый раз когда игрок проходит уровень.
// Чтобы успешно пройти уровень, надо выстрелить фаерболом (клавиша Shift) в забор.

// При вызове этой функции на канвас ctx должны быть выведены следующие элементы:

// Белое облако с координатами [100, 10] высотой 270px и шириной 420px.
// Облако может быть как правильным многоугольником, нарисованным методом fillRect,
// так и неправильным нарисованным с помощью методов beginPath, moveTo, closePath, fill и других.
// Под облаком должна располагаться тень: многоугольник такой же формы,
// залитый цветом rgba(0, 0, 0, 0.7) (полупрозрачный чёрный),
// смещённый относительно белого на 10px вниз и вправо.
// На облаке должен быть отрисован текст сообщения ’Ура вы победили! \nСписок результатов:
// ’ с помощью метода fillText. Текст должен быть набран шрифтом PT Mono размером 16px.
// Обратите внимание. Особенностью отрисовки текста на канвасе является то,
// что он не поддерживает перенос, поэтому каждая новая строчка должна быть отрисована
// новым вызовом метода fillText или strokeText.

// После сообщения о победе должна располагаться гистограмма времён участников.
// Параметры гистограммы следующие:
// Высота гистограммы 150px.
// Ширина колонки 40px.
// Расстояние между колонками 50px.
// Цвет колонки игрока Выrgba(255, 0, 0, 1).
// Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.
// Обратите внимание. В rgba последний параметр — это прозрачность, а не насыщенность.
//  Поэтому для задания цвета колонок других игроков нужно использовать hsl(240,100%,50%).

// Обратите внимание. Функцию отрисовки статистики вызывать не надо.
// Её будет вызывать непосредственно сама игра из файла js/game.js.

// Обратите внимание. Время прохождения игры должно быть округлено к целому числу.











