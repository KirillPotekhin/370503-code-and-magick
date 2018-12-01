'use strict';

var removeHidden = document.querySelector('.setup');
removeHidden.classList.remove('hidden');

var mockFirstName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var mockLastName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var mockCoatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var mockEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getName = function (firstName, lastName) {
  var nickName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
  return nickName;
};

var getColor = function (colors) {
  var color = colors[Math.floor(Math.random() * colors.length)];
  return color;
};

var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards[i] = {};
  wizards[i].name = getName(mockFirstName, mockLastName);
  wizards[i].coatColor = getColor(mockCoatColor);
  wizards[i].eyesColor = getColor(mockEyesColor);
}
