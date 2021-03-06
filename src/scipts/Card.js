export default class Card {
  constructor(data, cardSelector, { handleCardClick }, { handleDeleteClick }, { setLikeAPI }, { removeLikeAPI }, { userId }) {
    this._imageLink = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._setLikeAPI = setLikeAPI;
    this._removeLikeAPI = removeLikeAPI;
    this._userId = userId;
    this._likeList = data.likes;
    this._handleDeleteClick = handleDeleteClick;
    this._cardData = data;

    // console.log(data);
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
    if (button.target.classList.contains("elements__card-like_active")) {
      this._removeLikeAPI((data) => {
        button.target.classList.remove("elements__card-like_active");
        this._element.querySelector(".elements__counter").textContent = data.likes.length;
      });
    } else {
      this._setLikeAPI((data) => {
        const isLiked = data.likes.some(element => {
          return element._id === this._userId;
        });
        if (isLiked) {
          this._element.querySelector(".elements__counter").textContent = data.likes.length;
          button.target.classList.add("elements__card-like_active");
        }
      })
    }
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
    const cardLikes = this._element.querySelector('.elements__counter');

    cardImage.src = this._imageLink;
    cardImage.alt = this._title;
    cardtTitle.textContent = this._title;
    cardLikes.textContent = this._likes.length;

    const isLiked = this._likeList.some(element => {
      return element._id === this._userId;
    });
    if (isLiked) {
      this._element.querySelector(".elements__card-like").classList.add("elements__card-like_active");
    }
    if (this._userId != this._cardData.owner._id) {
      this._element.querySelector(".elements__card-delete").style.display = 'none';
    }

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
      .addEventListener('click', (event) => { this._likeButton(event) });

    this._element
      .querySelector('.elements__card-delete')
      .addEventListener('click', () => {
        this._handleDeleteClick(this._cardData, this._element);
      });
  }
}
