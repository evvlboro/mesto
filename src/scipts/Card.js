// import { openPopup } from './index.js'
import { popupImage, popupImageTitle, popupImgElement } from './constants.js';

export default class Card {
  constructor(data, cardSelector, { handleCardClick }) {
    this._imageLink = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true);

    return cardElement;
  }

  _likeButton(button) {
    button.target.classList.toggle('elements__card-like_active');
  }

  _deleteButton() {
    this._element.remove();
    this._element = null;
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
      .addEventListener('click', () => {
        this._handleCardClick();
      });

    this._element
      .querySelector('.elements__card-like')
      .addEventListener('click', this._likeButton);

    this._element
      .querySelector('.elements__card-delete')
      .addEventListener('click', () => {
        this._deleteButton()
      });
  }
}