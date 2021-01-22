class Card {
  constructor(cardSelector) {
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

  _handleOpenPopupImg() {
    popupImage.src = this._image;
    popupImage.alt = this._alt;
    popupImageTitle.textContent = this._alt;
    openPopup(popupImgElement);
  }

  _handleClosePopupImg() {
    closePopup(popupImgElement);
  }
}
