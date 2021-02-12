// import { openPopup } from './index.js'
import { popupImage, popupImageTitle, popupImgElement } from './constants.js';

export default class Card {
  constructor(data, cardSelector) {
    this._imageLink = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);

    return cardElement;
  }

  // _handleOpenPopupImg() {
  //   popupImage.src = this._imageLink;
  //   popupImage.alt = this._title;
  //   popupImageTitle.textContent = this._title;
  //   openPopup(popupImgElement);
  // }

  _likeButton(button) {
    button.target.classList.toggle('elements__card-like_active');
  }

  _deleteButton(button) {
    button.target.closest('.elements__card').remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector('.elements__card-image');
    const cardtTitle = this._element.querySelector('.elements__card-title');

    cardImage.src = this._imageLink;
    cardImage.alt = this._title;
    cardtTitle.textContent = this._title;

    return this._element;
  }

  _setEventListeners() {
    this._element
    .querySelector('.elements__card-image')
    // .addEventListener('click', () => {
    //   this._handleOpenPopupImg();
    // });

    this._element
      .querySelector('.elements__card-like')
      .addEventListener('click', this._likeButton);

    this._element
      .querySelector('.elements__card-delete')
      .addEventListener('click', this._deleteButton);
  }
}
