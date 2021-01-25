// Управление прайсом
if (window.outerWidth <= 640) {
  // Кнопка Меню в мобильной версии
  elementbgHeaderLogo.addEventListener('click', showMenuMV);
    function showMenuMV(event) {
    elementbgHeaderLogo.classList.toggle("menu_mobile");
    elementbgHeaderLogo.classList.toggle("menu_mobile_close");
    elementContainerHeader.classList.toggle('mobile_hidden');
    elementBody.classList.toggle('wrapper-body_mobile');
    if (document.body.style.overflow === "") {
      printScrollStopOn();
    } else if (document.body.style.overflow === "hidden") {
      printScrollStopOff();
    }
    // event.stopPropagation();
  }

  // Управление весами в прайсе
  let elementBoxPrMassArr = Array.from(elementBoxPrMass);
  for (let i = 0; i < elementBoxPrMassArr.length; i++) {
    elementBoxPrMassArr[i].insertAdjacentHTML('beforebegin', 
    `<div class="arrow_pre__group3">
      <svg class="arrows__icon" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
        <g id="chevron-left">
          <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"/>
        </g>
      </svg>
    </div>
    `);
    elementBoxPrMassArr[i].insertAdjacentHTML('afterend', 
    `<div class="arrow_next__group3">
      <svg class="arrows__icon" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
        <g id="keyboard-arrow-right">
          <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
        </g>
      </svg>
    </div>
  `);
  }

  const elementButtonPrNext = document.querySelectorAll('.arrow_next__group3'); // Все кнопки вперед прайса
  const elementButtonPrPre = document.querySelectorAll('.arrow_pre__group3');   // Все кнопки назад прайса
  
  function printActiveBoxPr(numberActiveSection) {
    elementBoxPrMassArr[numberActiveSection].classList.remove('mobile_hidden');
  }
  
  function printPassiveBoxPr(numberActiveSection) {
    elementBoxPrMassArr[numberActiveSection].classList.add('mobile_hidden');
  }

  let elementButtonPrNextArr = Array.from(elementButtonPrNext);
  for (let i = 0; i < elementButtonPrNext.length; i++) {
    elementButtonPrNextArr[i].addEventListener('click', showActiveBoxPr);
    function showActiveBoxPr() {
      printPassiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.add('mobile_hidden');
        elementMenuPrice.item(numberActiveSection).classList.remove('item_active');
        elementSectionMass.item(numberActiveSection).classList.add('hidden');
      numberActiveSection += 1;
      if (numberActiveSection == elementButtonPrNextArr.length) {
        numberActiveSection = 0;
      }
      printActiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.remove('mobile_hidden');
        elementMenuPrice.item(numberActiveSection).classList.add('item_active');
        elementSectionMass.item(numberActiveSection).classList.remove('hidden');
    }
  }

  let elementButtonPrPreArr = Array.from(elementButtonPrPre);
  for (let i = 0; i < elementButtonPrPreArr.length; i++) {
    elementButtonPrPreArr[i].addEventListener('click', showActiveBoxPr);
    function showActiveBoxPr() {
      printPassiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.add('mobile_hidden');
        elementMenuPrice.item(numberActiveSection).classList.remove('item_active');
        elementSectionMass.item(numberActiveSection).classList.add('hidden');
      numberActiveSection -= 1;
      if (numberActiveSection < 0) {
        numberActiveSection = elementButtonPrPreArr.length - 1;
      }
      printActiveBoxPr(numberActiveSection);
        elementItemPrVeMass.item(numberActiveSection).classList.remove('mobile_hidden');
        elementMenuPrice.item(numberActiveSection).classList.add('item_active');
        elementSectionMass.item(numberActiveSection).classList.remove('hidden');
    }
  }
}