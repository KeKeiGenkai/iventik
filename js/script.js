// script.js


// Функция показа вариантов изображений для конкретной коробки
function showImageOptions(boxNumber) {
  const select = document.getElementById(`imageOptions${boxNumber}`);
  select.style.display = 'block';
}

// Функция изменения изображения из выпадающего списка
function changeImageFromSelect(boxNumber) {
  const select = document.getElementById(`imageOptions${boxNumber}`);
  const selectedValue = select.value;
  const box = document.querySelector(`.box-${boxNumber}`);
  box.style.setProperty('--img', `url(${selectedValue})`);
}
// Функция изменения изображения для конкретной коробки
function showImageOptions(boxNumber) {
  const container = document.querySelector(`.box-${boxNumber} .image-options-container`);
  container.style.opacity = '0.75'; // Делаем элемент видимым при наведении
}

function hideImageOptions(boxNumber) {
  const container = document.querySelector(`.box-${boxNumber} .image-options-container`);
  container.style.opacity = '0'; // Скрываем элемент, когда мышь покидает коробку
}


