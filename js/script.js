// script.js


// Функция показа вариантов изображений для конкретной коробки
function showImageOptions(boxNumber) {
  const select = document.getElementById(`imageOptions${boxNumber}`);
  select.style.display = 'block';
}

// Функция изменения изображения из выпадающего списка
function changeImageFromSelect(boxNumber) {
  const select = document.getElementById(`imageOptions${boxNumber}`);
  const selectedIndex = select.selectedIndex;
  if (selectedIndex !== -1) {
    const selectedValue = select.options[selectedIndex].value;
    const box = document.querySelector(`.box-${boxNumber}`);
    box.style.setProperty('--img', `url(${selectedValue})`);
    select.style.display = 'none';
  }
}
// Функция изменения изображения для конкретной коробки
function showImageButton(boxNumber) {
  const button = document.querySelector(`.box-${boxNumber} .image-button`);
  button.style.display = 'block';
}

function hideImageButton(boxNumber) {
  const button = document.querySelector(`.box-${boxNumber} .image-button`);
  button.style.display = 'none';
}

// Получение набора изображений для конкретной коробки
function getImagesForBox(boxNumber) {
  switch (boxNumber) {
    case 1:
      return [
        'resourses/deamonTOOLS/Dimas1.png',
        'resourses/deamonTOOLS/Dimas2.png',
        'resourses/deamonTOOLS/Dimas3.png',
        'resourses/deamonTOOLS/Dimas4.png',
        'resourses/deamonTOOLS/Dimas5.png',
        'resourses/deamonTOOLS/Dimas6.png',
        'resourses/deamonTOOLS/Dimas7.png',
        'resourses/deamonTOOLS/Dimas8.png',
        'resourses/deamonTOOLS/Dimas9.png',

        // Добавьте другие изображения для первой коробки
      ];
    case 2:
      return [
        'https://i.postimg.cc/3RZ6bhDS/img-2.jpg',
        'https://i.postimg.cc/another-image-2.jpg',
        // Добавьте другие изображения для второй коробки
      ];
    // Аналогично для других коробок
    default:
      return [];
  }
}

// Добавим обработчики событий для отображения/скрытия кнопки
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  const boxNumber = parseInt(box.classList[1].split('-')[1], 10);
  box.addEventListener('mouseenter', () => {
    const button = box.querySelector('.image-button');
    button.style.display = 'block';
  });

  box.addEventListener('mouseleave', () => {
    const button = box.querySelector('.image-button');
    button.style.display = 'none';
  });

  box.addEventListener('click', () => {
    changeImage(boxNumber);
  });
});
