import Popup from "./Popup";

import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  open(imageLink, title, alt){
    this._popup.src = imageLink;
    this._popup.alt = alt;
    this._popup.textContent = title;
    super.open();
  }
}
