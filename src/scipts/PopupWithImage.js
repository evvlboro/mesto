import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  open(
    {
      link = 'https://chto-takoe-lyubov.net/wp-content/uploads/2017/08/xvoprositelnyy-znak-stikhi.jpg.pagespeed.ic.ZsPNJr3Kmn.jpg',
      name = 'unknown' }) {

    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageTitle = this._popup.querySelector('.popup__img-title');

    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageTitle.textContent = name;
    super.open();
  }
}
