// Открытие и закрытие дополнительного меню на панели кнопок, кроме мобильной версии
if (window.outerWidth > 640) {
  function getDropdownMenu(number) {
    elemListItemDropdown.item(number).addEventListener('mouseover', function() {
      if (elemMenuList.item(number).classList.contains('hidden')) {
        elemMenuList.item(number).classList.remove('hidden');
      }
    });
    elemListItemDropdown.item(number).addEventListener('mouseout', function() {
      if (!elemMenuList.item(number).classList.contains('hidden')) {
        elemMenuList.item(number).classList.add('hidden');
      }
    });
  }
  for (let i = 0; i < elemListItemDropdown.length; i++) {
    getDropdownMenu(i);
  }
}

// Убираем погружение обработчика на ссылке и поднимаемся наверх
elemWrapConLogo.addEventListener('click', function(event) {
  event.stopPropagation();
  scroll(0,0);
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
elementTransLink.addEventListener('click', function() {
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

// Управление фиксидом на кнопке вверх
window.addEventListener('scroll', setMenu);
function setMenu() {
  let viewportHeight = window.innerHeight;
  let elementMainTop = elementMain.getBoundingClientRect().top;
  if (elementMainTop < viewportHeight * -1) {
    elementButtonUp.classList.remove('button_hidden');
  }

  if (elementMainTop > viewportHeight * -1) {
    elementButtonUp.classList.add('button_hidden');
  }
}

// Кнопка возврата наверх страницы
elementButtonUp.addEventListener('click', printTopPage);
function printTopPage() {
  scroll(0,0);
}