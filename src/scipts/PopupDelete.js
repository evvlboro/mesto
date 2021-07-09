import Popup from "./Popup";

export default class PopupDelete extends Popup {
  constructor(popupSelector, submit)
  {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submit = submit;
  }

  _submitEvent = (evt) => {
    evt.preventDefault();
    this._submit(this._cardData, this._cardElement);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitEvent);
  }

  deleteButtonClick(cardData, cardElement) {
    this._cardData = cardData;
    this._cardElement = cardElement;
  }
}
