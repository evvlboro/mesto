const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  /*errorElement.classList.add(obj.errorClass);*/
};

const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  /*errorElement.classList.remove(obj.errorClass);*/
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button-save_inactive');
    buttonElement.disabled = 'true';
  } else {
    buttonElement.classList.remove('button-save_inactive');
    buttonElement.removeAttribute('disabled');
  }
}

function enableValidation(obj){
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);

    const editButton = document.querySelector('.portfolio__button-edit');
    /*клик по кнопке редактировать*/
    editButton.addEventListener('click', function () {
      toggleButtonState(inputList, buttonElement);
    });

    const addButton = document.querySelector('.portfolio__button-add');
    /*клик по кнопке добавить*/
    addButton.addEventListener('click', function () {
      toggleButtonState(inputList, buttonElement);
    });

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, obj);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement);
      });
    });
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});


