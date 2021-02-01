import { editButton, validationConfig} from './constants.js';

export class FormValidator {

  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(data.inputSelector));
    this._buttonElement = formElement.querySelector(data.submitButtonSelector);
    this._inputErrorClass = data.inputErrorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    /*errorElement.classList.add(obj.errorClass);*/
  }


  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    /*errorElement.classList.remove(obj.errorClass);*/
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add('button-save_inactive');
      this._buttonElement.disabled = 'true';
    } else {
      this._buttonElement.classList.remove('button-save_inactive');
      this._buttonElement.removeAttribute('disabled');
    }
  }

  clearValidationErrors(popup) {
    const popupInputs = popup.querySelectorAll('.popup__input');
    const popupInputErrors = popup.querySelectorAll('.popup__input-error');

    Array.from(popupInputs).forEach((item) => {
      item.classList.remove(validationConfig.inputErrorClass);
    });

    if (popupInputErrors){
      Array.from(popupInputErrors).forEach((item) => {
        item.textContent = '';
      });
    }
  }

  enableValidation() {
    editButton.addEventListener('click', () => {
      this.toggleButtonState();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this.toggleButtonState();
      });
    });
  }
}
