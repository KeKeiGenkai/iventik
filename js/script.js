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
    "Ты выступаешь в роли сутенёра, продай кого-нибудь противоположно пола так, будет ты был очень хорошим (гипербализированно хорошим) продавцом консультантом в мвидео",
    "Бей всем по жопе",
    "Все бьют по жопе тебя",
    "Снимай 1 шмотку на 5 минут",
    "Снимай 1 шмотку на 5 минут",
    "Ты встаёшь в какую-нибудь позу а другой человек с завязанными глазами должен на ощуп понять что за поза и тоже в неё встать",
    "Завяжи себе глаза на 3 минуты",
    "Ты исполняешь одно желание случайного человека",
    "Твоё желание исполнит случайный человек",
    "Пей шот не закусывая",
    "Ты с человеком противоположно пола уходишь в комнату на 10 минут",
    "Возьми метлу или швабру и попытайся станцевать вокруг нее стриптиз",
    "Поставь засос любому в этой комнате на видном месте",
    "Изобрази с любым играком твою любимую позу в сексе",
    "Станцуй стриптиз у любого игрока на коленях",
    "Возьми девушку на руки и отнеси вверх и вниз по лестнице. (Только для парней) если выпало девушке, то выбирай кто тебя понесёт",
    "Переоденься в одежду противоположного пола на 10 минут и отправь фото в общий чат",
    "Оближи живот (проведи языком 10-15 см) участнику компании противоположного пола",
    "Вырви волос на любой части тела у себя и любого участника компании",
    "Заснунь в нос радомный предмет в зоне видимости и не вытаскивай его на протяжении 3-х минут",
    "Намочи штаны в области паха (конкретно намочить) тем, что попадётся под руку (надеюсь это будет пиво)",
    "Цыганочка с любым человеком в компании",
    "Накрась губы помадой и расцелуй любого человека, которого выберут другие игроки",
    "Открой в интернете позы для йоги и повтори их",
    "Поздравляю тебе за шиворот сейчас полетит снег или лёд",
    "Следующие 2 минуты ты делаешь всё в обнимку с случайным человеком, а все остальные будут накидывать варианты",
    "Бъясни человеку строку из песни без слов",
    "Следующие 3 минуты ты копируешь все действия случайного человека",
    "Сядь на кого-нибудь на 3 минуты(не так, как это делал Коля)",
    "Языком очень отдалённых и мутных метафор и абстракций опиши человека из присутствующих если за минуту никто не отгадает пей шот (у тебя есть 30с на подготовку)",
    "Ты и случайный человек пьёте шот на брудершафт",
    "Следующие 4 минуты ты 50-ти летный ватник которому неприятно находится на таких мероприятиях, с таким людьми",
    "2 подика и начинается армейская затяжка, кто проиграл первым выходит вместе с подиком, потом он вместе со вторым проигравшим пьёт шот",
    "Ты делаешь татуировку",
    "Ты раздеваешься до нижнего белья(Девушки могут оставить 1 элемент одежды) и прыгаешь на скакалке 30 раз",
    "Смешай весь алкоголь в один шот и выпей",
    "Пей шот не закусывая",
    "Бей всем по жопе",
    "Цыганочка с любым человеком в компании",
    "Снимай 1 шмотку на 5 минут",
    "Ты делаешь татуировку",
    "Бей всем по жопе",
    "Пей шот не закусывая",
    "Ты делаешь татуировку",
    "Бъясни человеку строку из песни без слов",
    "Цыганочка с любым человеком в компании",
    "Бъясни человеку строку из песни без слов",
    "Цыганочка с любым человеком в компании",
    "Снимай 1 шмотку на 5 минут",
    "Пей шот не закусывая",

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
});
