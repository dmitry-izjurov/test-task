const elementButtonFeedBack = document.querySelectorAll('.contact-feedback-text');
const elementFormFeedback = document.querySelector('.container-form-feedback');
const elementFormRequest = document.querySelector('.container-form-request');
const elementButtonCloseForm = document.querySelectorAll('.box-form-h-text-close');

let elementButtonFeedBackArr = Array.from(elementButtonFeedBack).forEach(a => {
  a.addEventListener('click', showModal);

  function showModal() {
    if (elementFormFeedback.classList.contains('hidden')) {
      elementFormFeedback.classList.remove('hidden');
    }
  }
});

let elementButtonCloseFormArr = Array.from(elementButtonCloseForm).forEach(a => {
  a.addEventListener('click', closeModal);

  function closeModal() {
    if (!elementFormFeedback.classList.contains('hidden')) {
      elementFormFeedback.classList.add('hidden');
    }
  }
});