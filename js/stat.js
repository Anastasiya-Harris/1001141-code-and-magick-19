'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 10;
var CLOUD_Y = 100;
var CLOUD_GAP = 10;
var CLOUD_COLOR = 'white';
var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
var STRING_ARR = ['Ура вы победили!', 'Список результатов: '];
var textStyles = {
  FONT_SIZE: '16px',
  FONT_FAMILY: 'PT Mono',
  ctx.textBaseline = 'hanging';
};


//Генерация облака
var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color; ///почему не подсвечивает?
  ctx.fillRect(x, y, width, height);
};


ctx.font = '30px Tahoma';
ctx.fillText('Привет', 0, 10);


//Генерация текста
var renderText = function (ctx, textStyles,  ) {
  ctx.font = textStyles;

  for (var i = 0; i < STRING_ARR.length; i++) {
    ctx.fillText(STRING_ARR[i], 10, 50);
  }
};

var textCoord = {
  X: 40,
  Y: 120
};


//Случаянная насыщенность
var getRandomColor = function (hue) {
  return 'hsl(' + hue + ', ' + Math.random() * 100 + '%, 50%)';
};


window.renderStatistics = function (ctx, x, y, color) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');

  renderText(ctx, color, textStyles);

  renderHistogram()

  if (names = ['Вы']) {
    color = 'rgba(255, 0 , 0, 1)';
  else () {
    color = '#000';
  };
};
