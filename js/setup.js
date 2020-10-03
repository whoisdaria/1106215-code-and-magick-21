'use strict';

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupBlock = document.querySelector('.setup');
var similarList = document.querySelector('.setup-similar-list');
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья',  'Верон',  'Мирабелла','Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var getNumber = (array) => getRandomNumber(0, array.length-1);

for (let i = 0; i < 4; i++) {
  var wizard = new Object();
  wizard.name = FIRST_NAMES[getNumber(FIRST_NAMES)] + ' ' + LAST_NAMES[getNumber(LAST_NAMES)];
  wizard.coatColor = COAT_COLORS[getNumber(COAT_COLORS)];
  wizard.eyesColor = EYES_COLORS[getNumber(EYES_COLORS)];

  wizards.push(wizard)
}
console.log(wizards)

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarList.appendChild(fragment);
