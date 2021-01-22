const overlay = document.querySelector('.overlay');
const page = document.querySelector('.page');
const cards = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('#card-template').content;
const popupImgElement = document.querySelector('#popup_img');
const popupImage = popupImgElement.querySelector('.popup__image');
const popupImageTitle = popupImgElement.querySelector('.popup__img-title');
const popupAdd = document.querySelector('#popup_add');
const closePopupAddButton = popupAdd.querySelector('.popup__button-close');
const editButton = document.querySelector('.portfolio__button-edit');
const addButton = document.querySelector('.portfolio__button-add');
const popupEdit = document.querySelector('#popup_edit');
const portfolioName = document.querySelector('.portfolio__name');
const portfolioAbout = document.querySelector('.portfolio__about');
const profileForm = popupEdit.querySelector('.popup__form');
const inputName = popupEdit.querySelector('#input-name');
const inputAbout = popupEdit.querySelector('#input-about');
const popupAddFormElement = popupAdd.querySelector('.popup__form');
const nameInput = popupAdd.querySelector('#add-input-name');
const linkInput = popupAdd.querySelector('#add-input-link');
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
