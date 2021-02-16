import { overlay, page } from './constants.js'

export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
  }

  open(){
    this._popup.classList.add('popup_opened');
    overlay.classList.add('overlay_active');
    page.classList.add('page_no-scroll');

    document.addEventListener('keydown', this._handleEscClose);

  }

  close(){
    this._popup.classList.remove('popup_opened');
    overlay.classList.remove('overlay_active');
    page.classList.remove('page_no-scroll');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners(){
    this._popup.querySelector('.popup__button-close').addEventListener('click', () => {
      this.close();
    });
  }
}
