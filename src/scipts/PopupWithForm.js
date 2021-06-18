import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submit = submit;
  }

  //собирает данные всех полей формы
  _getInputValues() {
    const inputs = this._popup.querySelectorAll('.popup__input');
    const inputData = {};
    Array.from(inputs).forEach((item) => {
      inputData[item.name] = item.value;
    });
    return inputData;
  }

  _submitEvent = (evt) => {
    evt.preventDefault();
    this._submit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    //добавить обработчик сабмита формы
    this._form.addEventListener('submit', this._submitEvent);
  }

  close() {
    super.close();
    this._form.reset();
  }

}
