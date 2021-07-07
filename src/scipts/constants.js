export const overlay = document.querySelector('.overlay');
export const page = document.querySelector('.page');
export const cards = document.querySelector('.elements__cards');

export const popupImgElement = document.querySelector('#popup_img');
export const popupImage = popupImgElement.querySelector('.popup__image');
export const popupImageTitle = popupImgElement.querySelector('.popup__img-title');

export const popupAdd = document.querySelector('#popup_add');
export const closePopupAddButton = popupAdd.querySelector('.popup__button-close');
export const popupAddFormElement = popupAdd.querySelector('.popup__form');
export const nameInput = popupAdd.querySelector('#add-input-name');
export const linkInput = popupAdd.querySelector('#add-input-link');

export const popupEdit = document.querySelector('#popup_edit');
export const profileForm = popupEdit.querySelector('.popup__form');
export const addCardForm = popupAdd.querySelector('.popup__form');
export const inputName = popupEdit.querySelector('#input-name');
export const inputAbout = popupEdit.querySelector('#input-about');
export const closePopupButton = popupEdit.querySelector('.popup__button-close');

export const editButton = document.querySelector('.portfolio__button-edit');
export const addButton = document.querySelector('.portfolio__button-add');

export const portfolioName = document.querySelector('.portfolio__name');
export const portfolioAbout = document.querySelector('.portfolio__about');
export const portfolioAvatar = document.querySelector('.portfolio__avatar');


export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
