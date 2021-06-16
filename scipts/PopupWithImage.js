import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  open(
    {
      imageLink = 'https://chto-takoe-lyubov.net/wp-content/uploads/2017/08/xvoprositelnyy-znak-stikhi.jpg.pagespeed.ic.ZsPNJr3Kmn.jpg',
      title = 'unknown',
      alt = 'unknown' }) {

    super.open();
    this._popup.src = imageLink;
    this._popup.alt = alt;
    this._popup.textContent = title;
    console.log('Тут могут быть ошибки при открытии картинки');
  }
}
