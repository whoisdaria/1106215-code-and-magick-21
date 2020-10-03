'use strict';

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupBlock = document.querySelector('.setup');
var similarList = document.querySelector('.setup-similar-list');
var firstnames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastnames = ['да Марья',  'Верон',  'Мирабелла','Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var name;
var names= [];

setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

for (var i = 0; i < firstnames.length; i++) {
  var randomNameNumber = getRandomNumber(0, firstnames.length-1);
  name = firstnames[i] + ' ' + lastnames[randomNameNumber];
  names.push(name)
}

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  var randomCoatColorNumber = getRandomNumber(0, coatColor.length-1);
  var randomEyesColorNumber = getRandomNumber(0, eyesColor.length-1);

  wizardElement.querySelector('.setup-similar-label').textContent = names[i];
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor[randomCoatColorNumber];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor[randomEyesColorNumber];

  similarList.appendChild(wizardElement);
}
