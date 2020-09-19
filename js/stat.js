var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var BAR_WIDTH = 40;
var FONT_Y = 270;
var maxBarWidth = 150;

var renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, 40);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + 10 * i + '% , 50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, 100 + (maxBarWidth - (maxBarWidth * times[i]) / maxTime), BAR_WIDTH, (maxBarWidth * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, 90 + (maxBarWidth - (maxBarWidth * times[i]) / maxTime), BAR_WIDTH, (maxBarWidth * times[i]) / maxTime)
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, FONT_Y);
  }
}
