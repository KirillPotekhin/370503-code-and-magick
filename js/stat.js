'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 16;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  var text = ['Ура вы победили!', 'Список результатов:'];
  for (var i = 0; i < text.length; i++) {
    ctx.fillStyle = '#000000';
    // ctx.fillText(text[i], 120, 20 + (16 * i));
    ctx.fillText(text[i], CLOUD_X + (BAR_WIDTH / 2), CLOUD_Y + BAR_WIDTH / 2 + (TEXT_HEIGHT + TEXT_HEIGHT / 5) * i);
  }

  var maxTime = getMaxElement(times);

  for (var j = 0; j < names.length; j++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[j]), CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j, CLOUD_Y + (BAR_WIDTH / 2) + (TEXT_HEIGHT + TEXT_HEIGHT / 4) * text.length);
    ctx.fillText(names[j], CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j, CLOUD_Y + (BAR_WIDTH / 2) + (TEXT_HEIGHT + TEXT_HEIGHT / 4) * text.length + (TEXT_HEIGHT + TEXT_HEIGHT / 4) + BAR_HEIGHT + TEXT_HEIGHT / 2);

    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(226, ' + Math.round(Math.random() * 100) + '%, 50%, 1)';
    }
    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_GAP) * j, CLOUD_Y + (BAR_WIDTH / 2) + (TEXT_HEIGHT + TEXT_HEIGHT / 4) * text.length + (TEXT_HEIGHT + TEXT_HEIGHT / 4) + (BAR_HEIGHT - (BAR_HEIGHT * times[j]) / maxTime), BAR_WIDTH, BAR_HEIGHT * times[j] / maxTime);
  }
};
