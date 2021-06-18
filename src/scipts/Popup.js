// import { overlay, page } from './constants.js';
// * Это бред, что overlay и page нельзя экспортировать, потому что класс нельзя будет переиспользовать.
// * Эти элементы единственные на странице, а класс написан только для этого проекта, так что везде в этом проекте я смогу его переиспользовать.
// * И уж тем более передавать в конструкторе document нет никакого смысла.
export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._overlay = document.querySelector('.overlay');;
    this._page = document.querySelector('.page');;
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._overlay.classList.add('overlay_active');
    this._page.classList.add('page_no-scroll');

    document.addEventListener('keydown', this._handleEscClose);

  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._overlay.classList.remove('overlay_active');
    this._page.classList.remove('page_no-scroll');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }
  _clickOverlay = (event) => {
    if (event.target.classList.contains('popup_opened')) {
      this.close();
    }
  }
  setEventListeners() {
    const popupBtnClose = this._popup.querySelector('.popup__button-close');

    if (!popupBtnClose) {
      return;
    }

    popupBtnClose.addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('mousedown', (event) => {
      this._clickOverlay(event);
    });
  }
}
