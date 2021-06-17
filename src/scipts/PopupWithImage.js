import Popup from './Popup.js'
import { popupImage, popupImageTitle } from './constants.js';

export default class PopupWithImage extends Popup {
  open(
    {
      link = 'https://chto-takoe-lyubov.net/wp-content/uploads/2017/08/xvoprositelnyy-znak-stikhi.jpg.pagespeed.ic.ZsPNJr3Kmn.jpg',
      name = 'unknown' }) {

    popupImage.src = link;
    popupImage.alt = name;
    popupImageTitle.textContent = name;
    super.open();
  }
}
