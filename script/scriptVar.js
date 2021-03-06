const elementBody = document.querySelector('body');                                            // Body
const elementButtonUp = document.querySelector('.button');                                     // Кнопка Вверх
const elementContainerHeader = document.querySelector('.wrapper-contacts__wrapper-container'); // Контейнер с контактами и обратной связью
const elementbgHeaderLogo = document.querySelector('.wrapper-contacts__wrapper-logo');         // Оболочка контейнера с быком и текстом
const elemWrapConLogo = document.querySelector('.wrapper-container-logo');                     // Контейнер с быком и текстом
const elementMain = document.querySelector('.main');                                           // Страница Main
const elementMainContainer = document.querySelector('.header__wrapper-contacts');              // Главный контейнер
const elemListItemDropdown = document.querySelectorAll('.list-menu__item-dropdown');           // Элементы меню со стрелочкой
const elemMenuList = document.querySelectorAll('.menu__list');                                 // Списки элемента со стрелочкой
const elementButtonFeedBack = document.querySelectorAll('.contact-link__button');              // Кнопка Обратная связь
const elementFormFeedback = document.querySelector('.container-form-feedback');                // Контейнер формы Обратная связь
const elementFormRequest = document.querySelector('#container-form-request');                  // Контейнер формы Оставить заявку
const elementButtonCloseForm = document.querySelectorAll('.form__button_close');               // Контейнер кнопки закрыть на форме
const elementTransLink = document.querySelector('#h-cont-trans-link');                         // Ссылка на открытие формы Оставить заявку
const elementForms = document.querySelectorAll('.form');                                       // Формы
const elementArticleContent = document.querySelectorAll('.container-content');                 // Коллекция картинок с услугами
const elemBoxsVehicleFleet = document.querySelector('#boxs-vehicle-fleet');                    // Контейнер с грузовиками
const elementVehicleFleet = document.querySelectorAll('.wrapper-list');                        // Коллекция грузовиков

// Запрещает прокрутку страницы
function printScrollStopOn() {
  document.body.style.overflow = "hidden";
}
  
// Разрешает прокрутку страницы
function printScrollStopOff() {
  document.body.style.overflow = "";
}