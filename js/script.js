// script.js
// Функция показа вариантов изображений для конкретной коробки
function showImageOptions() {
  const container = box.querySelector('.image-options-container');
  container.style.opacity = '0.75'; // Делаем элемент видимым при наведении
}

// Функция скрытия вариантов изображений для конкретной коробки
function hideImageOptions() {
  const container = box.querySelector('.image-options-container');
  container.style.opacity = '0'; // Скрываем элемент, когда мышь покидает коробку
}
function addNonTransparentClass() {
  const container = document.querySelector('.container');
  container.classList.add('non-transparent');
}

function removeNonTransparentClass() {
  const container = document.querySelector('.container');
  container.classList.remove('non-transparent');
}

document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    // Тут можете оставить ваш код для обработки каждой коробки
  });

  // Массив заготовленных фраз
  const phrases = [
    
    // Добавьте другие фразы
  ];
  const phrasesSet2 = [
    "Stasik",
    "Lizer",
    "Varusha",
    "DianOCHKA",
    // ... (уникальные фразы для второго набора)
  ];

  const phrasesSet3 = [
    "Dimedroll",
    "Mikola",
    "Jiujitsa",
    "Smod",
    // ... (уникальные фразы для третьего набора)
  ];

  const phrasesSet4 = [
    "Dimedroll",
    "Stasik",
    "Mikola",
    "Lizer",
    "Jiujitsa",
    "Varusha",
    "Smod",
    "DianOCHKA",
    // Добавьте другие фразы для четвёртого набора
  ];

  window.generateRandomPhrase = function () {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    alert(randomPhrase);
  };

  window.generateRandomPhraseSet2 = function () {
    const randomIndex = Math.floor(Math.random() * phrasesSet2.length);
    const randomPhrase = phrasesSet2[randomIndex];
    alert(randomPhrase);
  };

  window.generateRandomPhraseSet3 = function () {
    const randomIndex = Math.floor(Math.random() * phrasesSet3.length);
    const randomPhrase = phrasesSet3[randomIndex];
    alert(randomPhrase);
  };

  function generateRandomPhraseSet4() {
    const randomIndex = Math.floor(Math.random() * phrasesSet4.length);
    const randomPhrase = phrasesSet4[randomIndex];
    alert(randomPhrase);
  }

  const button5 = document.querySelector('.image-button5');
  if (button5) {
    button5.addEventListener('click', function () {
      generateRandomPhraseSet4();
    });
  }
});
