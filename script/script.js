const elementMain = document.querySelector('.main');                                 // Страница Main
const elementButtonFeedBack = document.querySelectorAll('.contact-feedback-text');   // Кнопка Обратная связь
const elementFormFeedback = document.querySelector('.container-form-feedback');      // Контейнер формы Обратная связь
const elementFormRequest = document.querySelector('.container-form-request');        // Контейнер формы Оставить заявку
const elementButtonCloseForm = document.querySelectorAll('.box-form-h-text-close');  // Контейнер кнопки закрыть на форме
const elementTransLink = document.querySelector('.h-cont-trans-link');               // Ссылка на открытие формы Оставить заявку
const elementPrice = document.querySelector('.price')                                // Кнопка Прайс
const elementPagePrice = document.querySelector('.bg-container-price');              // Страница Прайс
const elementContainerTitle = document.querySelector('.bg-container-title')          // Контейнер с большой картинкой
const elementContainerHeaderLogo = document.querySelector('.container-header-logo')  // Контейнер с рисунком быка и фразой Домашний переезд
const elementLinkMain = document.querySelector('.navigation-menu-item-link')         // Ссылка на хлебных крошках Главная
const elementButtonRequest = document.querySelector('.box-button-price')             // Кнопка Оставить заявку
const elementMenuPrice = document.querySelectorAll('.box-item-pr-veh-mass')          // Кнопки меню страницы Price
const elementSectionMass = document.querySelectorAll('.box-price')                   // Секции с весами
let numberActiveSection = 0;                                                         // Номер активной секции

// Открываем форму Обратная связь
let elementButtonFeedBackArr = Array.from(elementButtonFeedBack).forEach(a => {
  a.addEventListener('click', showModal);

  function showModal() {
    if (elementFormFeedback.classList.contains('hidden')) {
      elementFormFeedback.classList.remove('hidden');
    }
  }
});

// Открываем форму Оставить заявку
let elementRequestArr = [elementTransLink, elementButtonRequest].forEach(a => {
  a.addEventListener('click', () => {
    if (elementFormRequest.classList.contains('hidden')) {
      elementFormRequest.classList.remove('hidden');
    }
  });
});

// Закрываем форму Обратная связь и Оставить заявку
let elementButtonCloseFormArr = Array.from(elementButtonCloseForm).forEach(a => {
  a.addEventListener('click', closeModal);

  function closeModal() {
    if (!elementFormFeedback.classList.contains('hidden')) {
      elementFormFeedback.classList.add('hidden');
    }

    if (!elementFormRequest.classList.contains('hidden')) {
      elementFormRequest.classList.add('hidden');
    }
  }
});

// Открываем страницу Price
let elementPriceOpen = elementPrice.addEventListener('click', () => {
if (!elementMain.classList.contains('hidden') && !elementContainerTitle.classList.contains('hidden')) {
  elementMain.classList.add('hidden');
  elementContainerTitle.classList.add('hidden');
}

if (elementPagePrice.classList.contains('hidden')) {
  elementPagePrice.classList.remove('hidden');
}
});

// Открываем главную страницу
let elementMainOpen = [elementContainerHeaderLogo, elementLinkMain].forEach(a => {
  a.addEventListener('click', showMainPage);

  function showMainPage() {
    if (elementMain.classList.contains('hidden') && elementContainerTitle.classList.contains('hidden')) {
      elementMain.classList.remove('hidden');
      elementContainerTitle.classList.remove('hidden');
      elementPagePrice.classList.add('hidden');
      if (numberActiveSection != 0) {
        elementMenuPrice.item(numberActiveSection).classList.remove('item-price-active');
        elementSectionMass.item(numberActiveSection).classList.add('hidden');
        elementMenuPrice.item(0).classList.add('item-price-active');
        elementSectionMass.item(0).classList.remove('hidden');
      }
    }
  }
});

// Открываем вкладки с весами
for (let i = 0; i < elementMenuPrice.length; i++) {
  elementMenuPrice.item(i).addEventListener('click', openSection);
  function openSection() {
    if (!elementMenuPrice.item(i).classList.contains('item-price-active')) {
      for (let a = 0; a < elementMenuPrice.length; a++) {
        if (elementMenuPrice.item(a).classList.contains('item-price-active')) {
          elementMenuPrice.item(a).classList.remove('item-price-active');
          elementSectionMass.item(a).classList.add('hidden');
        }
      }
      elementMenuPrice.item(i).classList.add('item-price-active');
      elementSectionMass.item(i).classList.remove('hidden');
      numberActiveSection = i;
      return numberActiveSection;
    }
  }
}