'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var CLOUD_COLOR = 'white';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var STRING_ARR = ['Ура вы победили!', 'Список результатов: '];
var textStyles = {
  FONT_SIZE: '16px',
  FONT_FAMILY: 'PT Mono',
};
var FONT_TEXT_BASELINE = 'hanging';

var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var COLUMN_HEIGHT = 150;

var textCoord = {
  X: 150,
  Y: 10
};

//Генерация облака
var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

//Генерация текста
var renderText = function (ctx, textStyles, textCoord, STRING_ARR, CLOUD_GAP) {
  ctx.fillStyle = '#000';
  ctx.font = textStyles.FONT_SIZE, textStyles.FONT_FAMILY;
  ctx.textBaseline = FONT_TEXT_BASELINE;

  for (var i = 0; i < STRING_ARR.length; i++) {
    ctx.fillText(STRING_ARR[i], textCoord.X, textCoord.Y + CLOUD_GAP * 3);
    // ctx.fillText("Hello world", 10, 50);
  }
};

//Случаянная насыщенность
var getRandomColor = function (hue) {
  return 'hsl(' + hue + ', ' + Math.round(Math.random() * 101) + '%, 50%)';
};

//Генерация статистики
var renderHistogram = function (ctx, names, times) {
renderCloud (ctx, 150, 100, COLUMN_WIDTH, COLUMN_HEIGHT, getRandomColor); //Высота должна вычисляться по времени
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X,  CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

  renderText(ctx, textStyles, textCoord, STRING_ARR, CLOUD_GAP, '#000');

  renderHistogram(ctx, names, times);

  // if (names = ['Вы']) {
  //   ctx.fillStyle = 'rgba(255, 0 , 0, 1)';
  // }
  // else {
  //   ctx.fillStyle = getRandomColor(240);
  // };
};
