// Управление картинками с услугами и грузовиками
if (window.outerWidth <= 640) {
  // Кнопка Меню в мобильной версии
  elementbgHeaderLogo.addEventListener('click', showMenuMV);
    function showMenuMV() {
    elementbgHeaderLogo.classList.toggle("menu_mobile");
    elementbgHeaderLogo.classList.toggle("menu_mobile_close");
    elementContainerHeader.classList.toggle('mobile_hidden');
    elementBody.classList.toggle('wrapper-body_mobile');
    if (document.body.style.overflow === "") {
      printScrollStopOn();
    } else if (document.body.style.overflow === "hidden") {
      printScrollStopOff();
    }
  }

  // Упраление услугами
  // window.outerWidth < window.outerHeight
  let elementArticleContentArr = Array.from(elementArticleContent);
  elementArticleContentArr[0].insertAdjacentHTML('beforebegin', 
  `<div class="arrows arrow_next arrow_next__group1">
    <svg class="arrows__icon" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
      <g id="keyboard-arrow-right">
        <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
      </g>
    </svg>
  </div>
  <div class="arrows arrow_pre arrow_pre__group1">
    <svg class="arrows__icon" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
      <g id="chevron-left">
        <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"/>
      </g>
    </svg>
  </div>
  `);

  // Управление грузовиками
  let elementVehicleFleetArr = Array.from(elementVehicleFleet);
  elemBoxsVehicleFleet.insertAdjacentHTML('beforebegin', 
  `<div class="arrows arrow_next arrow_next__group2">
    <svg class="arrows__icon" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
      <g id="keyboard-arrow-right">
        <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306 		"/>
      </g>
    </svg>
  </div>
  <div class="arrows arrow_pre arrow_pre__group2">
    <svg class="arrows__icon" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
      <g id="chevron-left">
        <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153 		"/>
      </g>
    </svg>
  </div>
 `);

const elementButtonArrow = document.querySelectorAll('.arrows');                    // Все кнопки вперед и назад
let numberActiveContainerAC = 0;                                                    // Номер активного контейнера услуг
let numberActiveContainerVF = 0;                                                    // Номер активного контейнера грузовика
Array.from(elementButtonArrow).forEach(a => {
  a.addEventListener('click', (event) => {
    function printActiveBox(elementArr, numberActiveContainer) {
      elementArr[numberActiveContainer].classList.remove('mobile_hidden');
    }
    
    function printPassiveBox(elementArr, numberActiveContainer) {
      elementArr[numberActiveContainer].classList.add('mobile_hidden');
    }
    
    if (event.target.closest('.arrows').classList.contains('arrow_next')) {
      if (event.target.closest('.wrapper-content').children.item(3).classList.contains('container-content')) {
        printPassiveBox(elementArticleContentArr, numberActiveContainerAC);
        numberActiveContainerAC += 1;
        if (numberActiveContainerAC == elementArticleContentArr.length) {
          numberActiveContainerAC = 0;
        }
        printActiveBox(elementArticleContentArr, numberActiveContainerAC);
      }

      if (event.target.closest('.wrapper-content').children.item(3).children.item(0).classList.contains('wrapper-list')) {
        printPassiveBox(elementVehicleFleetArr, numberActiveContainerVF);
        numberActiveContainerVF += 1;
        if (numberActiveContainerVF == elementVehicleFleetArr.length) {
          numberActiveContainerVF = 0;
        }
        printActiveBox(elementVehicleFleetArr, numberActiveContainerVF);
      }
    }

    if (event.target.closest('.arrows').classList.contains('arrow_pre')) {
      if (event.target.closest('.wrapper-content').children.item(3).classList.contains('container-content')) {
        printPassiveBox(elementArticleContentArr, numberActiveContainerAC);
        numberActiveContainerAC -= 1;
        if (numberActiveContainerAC < 0) {
          numberActiveContainerAC = elementArticleContentArr.length - 1;
        }
        printActiveBox(elementArticleContentArr, numberActiveContainerAC);
      }

      if (event.target.closest('.wrapper-content').children.item(3).children.item(0).classList.contains('wrapper-list')) {
        printPassiveBox(elementVehicleFleetArr, numberActiveContainerVF);
        numberActiveContainerVF -= 1;
        if (numberActiveContainerVF < 0) {
          numberActiveContainerVF = elementVehicleFleetArr.length - 1;
        }
        printActiveBox(elementVehicleFleetArr, numberActiveContainerVF);
      }
    }
  });
});
}