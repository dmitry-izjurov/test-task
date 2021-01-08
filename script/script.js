// Открываем форму Обратная связь
let elementButtonFeedBackArr = Array.from(elementButtonFeedBack).forEach(a => {
  a.addEventListener('click', showModal);

  function showModal() {
    if (elementFormFeedback.classList.contains('hidden')) {
      elementFormFeedback.classList.remove('hidden');
    }
    // Для мобильной версии
    if (window.outerWidth <= 640 && window.outerWidth < window.outerHeight) {
      if (elementbgHeaderLogo.classList.contains('mv-button-menu-cl')) {
        showMenuMV();
      }
    }
  }
});

// Открываем форму Оставить заявку
let elementRequestArr = [elementTransLink, elementButtonRequest].forEach(a => {
  a.addEventListener('click', () => {
    elementFormRequest.classList.toggle('hidden');
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

    Array.from(elementForms).forEach(a => {
      a.reset();
    })
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

// Для мобильной версии
if (window.outerWidth <= 640 && window.outerWidth < window.outerHeight) {
  showMenuMV();
}

scroll(0,0);
});

// Открываем главную страницу
let elementMainOpen = [elementContainerHeaderLogo, elementLinkMain].forEach(a => {
  a.addEventListener('click', showMainPage);

  function showMainPage(event) {
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
    event.stopPropagation();
    scroll(0,0);
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

// - - - - - - - Мобильная версия - - - - - - -
// Управление фиксидом на кнопке вверх
window.addEventListener('scroll', setMenu);
function setMenu() {
  let viewportHeight = window.innerHeight;
  let elementMainTop = elementMain.getBoundingClientRect().top;
  if (elementMainTop < viewportHeight * -1) {
    elementButtonUp.classList.remove('hidden');
  }

  if (elementMainTop > viewportHeight * -1) {
    elementButtonUp.classList.add('hidden');
  }
}

// Кнопка Меню в мобильной версии
elementbgHeaderLogo.addEventListener('click', showMenuMV);
function showMenuMV() {
  elementbgHeaderLogo.classList.toggle("mv-button-menu");
  elementbgHeaderLogo.classList.toggle("mv-button-menu-cl");
  elementContainerHeader.classList.toggle('mv-hidden');
  elementBody.classList.toggle('mv-bg-body');
}

// Кнопка возврата наверх страницы
elementButtonUp.addEventListener('click', printTopPage);
function printTopPage() {
  scroll(0,0);
}

// Управление картинками с услугами, грузовиками и прайсом
if (window.outerWidth <= 640 && window.outerWidth < window.outerHeight) {
  // Упраление услугами
  let elementArticleContentArr = Array.from(elementArticleContent);
  for (let i = 0; i < elementArticleContentArr.length; i++) {
    elementArticleContentArr[i].insertAdjacentHTML('beforeend', 
      `<div class="container-article-content-next">
        <svg class="ac-preview" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
          <g id="keyboard-arrow-right">
            <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
          </g>
        </svg>
      </div>
      <div class="container-article-content-pre">
        <svg class="ac-preview" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
          <g id="chevron-left">
            <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"/>
          </g>
        </svg>
      </div>
    `);
  }
  
  // Управление грузовиками
  let elementVehicleFleetArr = Array.from(elementVehicleFleet);
  for (let i = 0; i < elementVehicleFleetArr.length; i++) {
      elementVehicleFleetArr[i].insertAdjacentHTML('beforeend', 
      `<div class="container-vehicle-fleet-next">
        <svg class="vehicle-fl-preview" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
          <g id="keyboard-arrow-right">
            <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
          </g>
        </svg>
      </div>
      <div class="container-vehicle-fleet-pre">
        <svg class="vehicle-fl-preview" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
          <g id="chevron-left">
            <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"/>
          </g>
        </svg>
      </div>
    `);
  }
  
  let numberActiveContainerAC = 0;                                                          // Номер активного контейнера услуг
  let numberActiveContainer = 0;                                                            // Номер активного контейнера грузовика
  const elementButtonACNext = document.querySelectorAll('.container-article-content-next'); // Все кнопки вперед услуг
  const elementButtonACPre = document.querySelectorAll('.container-article-content-pre');   // Все кнопки назад услуг
  const elementButtonVFNext = document.querySelectorAll('.container-vehicle-fleet-next');   // Все кнопки вперед грузовиков
  const elementButtonVFPre = document.querySelectorAll('.container-vehicle-fleet-pre');     // Все кнопки назад грузовиков

  function printActiveBoxAC(numberActiveContainerAC) {
    elementArticleContentArr[numberActiveContainerAC].classList.remove('mv-hidden');
  }
  
  function printPassiveBoxAC(numberActiveContainerAC) {
    elementArticleContentArr[numberActiveContainerAC].classList.add('mv-hidden');
  }
  
  let elementButtonACNextArr = Array.from(elementButtonACNext);
  for (let i = 0; i < elementButtonACNextArr.length; i++) {
    elementButtonACNextArr[i].addEventListener('click', showActiveBoxAC);
    function showActiveBoxAC() {
      printPassiveBoxAC(numberActiveContainerAC);
      numberActiveContainerAC += 1;
      if (numberActiveContainerAC == elementButtonACNextArr.length) {
        numberActiveContainerAC = 0;
      }
      printActiveBoxAC(numberActiveContainerAC);
    }
  }

  let elementButtonACPreArr = Array.from(elementButtonACPre);
  for (let i = 0; i < elementButtonACPreArr.length; i++) {
    elementButtonACPreArr[i].addEventListener('click', showActiveBoxAC);
    function showActiveBoxAC() {
      printPassiveBoxAC(numberActiveContainerAC);
      numberActiveContainerAC -= 1;
      if (numberActiveContainerAC < 0) {
        numberActiveContainerAC = elementButtonACPreArr.length - 1;
      }
      printActiveBoxAC(numberActiveContainerAC);
    }
  }

  function printActiveBox(numberActiveContainer) {
    elementVehicleFleetArr[numberActiveContainer].classList.remove('mv-hidden');
  }
  
  function printPassiveBox(numberActiveContainer) {
    elementVehicleFleetArr[numberActiveContainer].classList.add('mv-hidden');
  }
  
  let elementButtonVFNextArr = Array.from(elementButtonVFNext);
  for (let i = 0; i < elementButtonVFNextArr.length; i++) {
    elementButtonVFNextArr[i].addEventListener('click', showActiveBox);
    function showActiveBox() {
      printPassiveBox(numberActiveContainer);
      numberActiveContainer += 1;
      if (numberActiveContainer == elementButtonVFNextArr.length) {
        numberActiveContainer = 0;
      }
      printActiveBox(numberActiveContainer);
    }
  }

  let elementButtonVFPreArr = Array.from(elementButtonVFPre);
  for (let i = 0; i < elementButtonVFPreArr.length; i++) {
    elementButtonVFPreArr[i].addEventListener('click', showActiveBox);
    function showActiveBox() {
      printPassiveBox(numberActiveContainer);
      numberActiveContainer -= 1;
      if (numberActiveContainer < 0) {
        numberActiveContainer = elementButtonVFPreArr.length - 1;
      }
      printActiveBox(numberActiveContainer);
    }
  }

  // Управление весами в прайсе
  let elementBoxPrMassArr = Array.from(elementBoxPrMass);
  for (let i = 0; i < elementBoxPrMassArr.length; i++) {
    elementBoxPrMassArr[i].insertAdjacentHTML('beforebegin', 
    `<div class="box-i-pr-mass-pre">
      <svg class="pr-preview" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
        <g id="chevron-left">
          <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"/>
        </g>
      </svg>
    </div>
    `);
    elementBoxPrMassArr[i].insertAdjacentHTML('afterend', 
    `<div class="box-i-pr-mass-next">
      <svg class="pr-preview" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
        <g id="keyboard-arrow-right">
          <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
        </g>
      </svg>
    </div>
  `);
  }

  const elementButtonPrNext = document.querySelectorAll('.box-i-pr-mass-next'); // Все кнопки вперед прайса
  const elementButtonPrPre = document.querySelectorAll('.box-i-pr-mass-pre');   // Все кнопки назад прайса
  
  function printActiveBoxPr(numberActiveSection) {
    elementBoxPrMassArr[numberActiveSection].classList.remove('mv-hidden');
  }
  
  function printPassiveBoxPr(numberActiveSection) {
    elementBoxPrMassArr[numberActiveSection].classList.add('mv-hidden');
  }

  let elementButtonPrNextArr = Array.from(elementButtonPrNext);
  for (let i = 0; i < elementButtonPrNext.length; i++) {
    elementButtonPrNextArr[i].addEventListener('click', showActiveBoxPr);
    function showActiveBoxPr() {
      printPassiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.add('mv-hidden');
        elementMenuPrice.item(numberActiveSection).classList.remove('item-price-active');
        elementSectionMass.item(numberActiveSection).classList.add('hidden');
      numberActiveSection += 1;
      if (numberActiveSection == elementButtonPrNextArr.length) {
        numberActiveSection = 0;
      }
      printActiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.remove('mv-hidden');
        elementMenuPrice.item(numberActiveSection).classList.add('item-price-active');
        elementSectionMass.item(numberActiveSection).classList.remove('hidden');
    }
  }

  let elementButtonPrPreArr = Array.from(elementButtonPrPre);
  for (let i = 0; i < elementButtonPrPreArr.length; i++) {
    elementButtonPrPreArr[i].addEventListener('click', showActiveBoxPr);
    function showActiveBoxPr() {
      printPassiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.add('mv-hidden');
        elementMenuPrice.item(numberActiveSection).classList.remove('item-price-active');
        elementSectionMass.item(numberActiveSection).classList.add('hidden');
      numberActiveSection -= 1;
      if (numberActiveSection < 0) {
        numberActiveSection = elementButtonPrPreArr.length - 1;
      }
      printActiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.remove('mv-hidden');
        elementMenuPrice.item(numberActiveSection).classList.add('item-price-active');
        elementSectionMass.item(numberActiveSection).classList.remove('hidden');
    }
  }
}