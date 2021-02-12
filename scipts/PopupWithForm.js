import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submit = submitCallback;
  }

  //собирает данные всех полей формы
  _getInputValues() {
    const inputs = this._popup.querySelectorAll('.popup__input');
    //Array.from(inputs).forEach
  }

  setEventListeners() {
    super.setEventListeners();
    //добавить обработчик сабмита формы
  }

  close(){
    super.close();
    this._popup.reset();
  }
}
