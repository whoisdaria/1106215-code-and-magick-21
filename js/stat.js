'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var GAP = 50;
var BAR_WIDTH = 40;
var FONT_Y = 270;
var MAX_BAR_HEIGHT = 150;

var renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (elements) {
  var maxElement = elements[0];

  for (var i = 1; i < elements.length; i++) {
    if (elements[i] > maxElement) {
      maxElement = elements[i];
    }
  }
  return maxElement;
};

var getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 60);

  for (var i = 0; i < names.length; i++) {
    var maxTime = getMaxElement(times);
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var elementX = CLOUD_X + GAP + (BAR_WIDTH + GAP) * i;
    var saturation = getRandomNumber(1, 100);

    ctx.fillStyle = names[i] === 'Вы' ? 'rgb(255, 0, 0)' : ctx.fillStyle = 'hsl(240, ' + saturation + '% , 50%)';
    ctx.fillRect(elementX, 100 + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), elementX, 90 + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);
    ctx.fillText(names[i], elementX, FONT_Y);
  }
};
