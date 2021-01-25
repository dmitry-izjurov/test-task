// Открытие и закрытие дополнительного меню на панели кнопок, кроме мобильной версии
if (window.outerWidth > 640) {
  function getDropdownMenu(number) {
    elemListItemDropdown.item(number).addEventListener('mouseover', function() {
      if (elemMenuList.item(number).classList.contains('hidden')) {
        elemMenuList.item(number).classList.remove('hidden');
        elemMenuList.item(number).style = 'background-color: #e6e6e6;';
      }
    });
    elemListItemDropdown.item(number).addEventListener('mouseout', function() {
      if (!elemMenuList.item(number).classList.contains('hidden')) {
        elemMenuList.item(number).classList.add('hidden');
        elemMenuList.item(number).style = 'background-color: #ffffff;';
      }
    });
  }
  for (let i = 0; i < elemListItemDropdown.length; i++) {
    getDropdownMenu(i);
  }
}

// Убираем погружение обработчика на ссылке
elemWrapConLogo.addEventListener('click', function(event) {
  event.stopPropagation();
});

// Открываем форму Обратная связь
for (let i = 0; i < elementButtonFeedBack.length; i++) {
  elementButtonFeedBack.item(i).addEventListener('click', showModal);

  function showModal() {
    if (elementFormFeedback.classList.contains('hidden')) {
      elementFormFeedback.classList.remove('hidden');
    }
    // Для мобильной версии
    if (window.outerWidth <= 640) {
      if (elementbgHeaderLogo.classList.contains('menu_mobile_close')) {
        showMenuMV();
        printScrollStopOn();
      }
    }
  }
}

// Открываем форму Оставить заявку
elementButtonRequest.addEventListener('click', function() {
  elementFormRequest.classList.toggle('hidden');
  // Для мобильной версии
  if (window.outerWidth <= 640) {
    printScrollStopOn();
  }
});

// Закрываем форму Обратная связь и Оставить заявку
for (let i = 0; i < elementButtonCloseForm.length; i++) {
  elementButtonCloseForm.item(i).addEventListener('click', closeModal);
  function closeModal() {
    if (!elementFormFeedback.classList.contains('hidden')) {
      elementFormFeedback.classList.add('hidden');
    }

    if (!elementFormRequest.classList.contains('hidden')) {
      elementFormRequest.classList.add('hidden');
    }

    elementForms.forEach(function(a) {
      a.reset();
    });

    // Для мобильной версии
    if (window.outerWidth <= 640) {
      printScrollStopOff();
    }
  }
}

// Открываем вкладки с весами
function getItemMenuPrice(number) {
  elementMenuPrice.item(number).addEventListener('click', openSection);
  function openSection() {
    if (!elementMenuPrice.item(number).classList.contains('item_active')) {
      for (let a = 0; a < elementMenuPrice.length; a++) {
        if (elementMenuPrice.item(a).classList.contains('item_active')) {
          elementMenuPrice.item(a).classList.remove('item_active');
          elementSectionMass.item(a).classList.add('hidden');
        }
      }
      elementMenuPrice.item(number).classList.add('item_active');
      elementSectionMass.item(number).classList.remove('hidden');
      numberActiveSection = number;
      return numberActiveSection;
    }
  }
}

for (let i = 0; i < elementMenuPrice.length; i++) {
  getItemMenuPrice(i);
}