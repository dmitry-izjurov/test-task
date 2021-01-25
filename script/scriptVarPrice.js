const elementBody = document.querySelector('body');                                            // Body
const elemWrapConLogo = document.querySelector('.wrapper-container-logo');                     // Контейнер с быком и текстом
const elemListItemDropdown = document.querySelectorAll('.list-menu__item-dropdown');           // Элементы меню со стрелочкой
const elemMenuList = document.querySelectorAll('.menu__list');                                 // Списки элемента со стрелочкой
const elementButtonFeedBack = document.querySelectorAll('.contact-link__button');              // Кнопка Обратная связь
const elementFormFeedback = document.querySelector('.container-form-feedback');                // Контейнер формы Обратная связь
const elementFormRequest = document.querySelector('#container-form-request');                  // Контейнер формы Оставить заявку
const elementButtonCloseForm = document.querySelectorAll('.form__button_close');               // Контейнер кнопки закрыть на форме
const elementButtonRequest = document.querySelector('#box-button-price');                      // Кнопка Оставить заявку
const elementMenuPrice = document.querySelectorAll('.list-select__container-text');            // Кнопки меню страницы Price
const elementSectionMass = document.querySelectorAll('.container-group');                      // Секции с весами
const elementForms = document.querySelectorAll('.form');                                       // Формы
const elementbgHeaderLogo = document.querySelector('.wrapper-contacts__wrapper-logo');         // Облочка контейнера с быком и текстом
const elementContainerHeader = document.querySelector('.wrapper-contacts__wrapper-container'); // Контейнер с контактами и обратной связью
const elementItemPrVeMass = document.querySelectorAll('.list-select__item');                   // Коллекция элементов с весами в прайсе
const elementBoxPrMass = document.querySelectorAll('.list-select__container-text');            // Коллекция названий весов в прайсе
let numberActiveSection = 0;                                                                   // Номер активной секции в прайсе

// Запрещает прокрутку страницы
function printScrollStopOn() {
  document.body.style.overflow = "hidden";
}

// Разрешает прокрутку страницы
function printScrollStopOff() {
  document.body.style.overflow = "";
}