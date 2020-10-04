'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ELEMENTS_QUANTITY = 4;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupBlock = document.querySelector('.setup');
var similarList = document.querySelector('.setup-similar-list');
var wizards = [];

var fragment = document.createDocumentFragment();

var getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
var getRandomIndex = (elements) => getRandomNumber(0, elements.length - 1);

var createData = (elementsQuantity) => {
  for (var i = 0; i < elementsQuantity; i++) {
    var wizard = {};
    wizard.name = FIRST_NAMES[getRandomIndex(FIRST_NAMES)] + ' ' + LAST_NAMES[getRandomIndex(LAST_NAMES)];
    wizard.coatColor = COAT_COLORS[getRandomIndex(COAT_COLORS)];
    wizard.eyesColor = EYES_COLORS[getRandomIndex(EYES_COLORS)];

    wizards.push(wizard);
  }
};
createData(ELEMENTS_QUANTITY);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderFragment = (elements) => {
  for (var i = 0; i < elements.length; i++) {
    fragment.appendChild(renderWizard(elements[i]));
  }
};

renderFragment(wizards);

similarList.appendChild(fragment);

setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
