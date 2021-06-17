import '../pages/index.css';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, overlay, page, popupImgElement, cards, closePopupAddButton, editButton, popupAdd,
  popupAddFormElement, nameInput, linkInput, popupEdit, profileForm, inputName, inputAbout,
  closePopupButton, addButton, portfolioName, portfolioAbout, validationConfig, addCardForm, popupImage} from './constants.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

const popupWithImage = new PopupWithImage(popupImgElement);

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item);
    }
  },
  cards
);

function createCard(data) {
  const card = new Card(data, '#card-template', {
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

const userInfo = new UserInfo(portfolioName, portfolioAbout);

const editPopup = new PopupWithForm(
  popupEdit,
  /*validationEditPopup,*/
  (data) => {
    userInfo.setUserInfo(data);
    editPopup.close();
});

const addPopup = new PopupWithForm(
  popupAdd,
  /*validationAddPopup,*/
  (data) => {
    createCard(data);
    addPopup.close();
});

popupWithImage.setEventListeners();
addPopup.setEventListeners();
editPopup.setEventListeners();

editButton.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  inputName.value = data.inputName;
  inputAbout.value = data.inputAbout;
  userInfo.setUserInfo(data);
  editPopup.open();
});

addButton.addEventListener("click", function () {
  addPopup.open();
});


/*ф-ия заполнения полей формы*/
function updateForm(){
  inputName.value = portfolioName.textContent;
  inputAbout.value = portfolioAbout.textContent;
}

//Валидация форм
function enableValidation(obj){
  const profileFormValidator = new FormValidator(obj, profileForm);
  profileFormValidator.enableValidation();

  //клик по кнопке "редактировать"
  editButton.addEventListener('click', function(){

    //clearForm(popupEdit);
    //openPopup(popupEdit);
    profileFormValidator.clearValidationErrors(popupEdit);
    //updateForm();

  });


  const addCardFormValidator = new FormValidator(obj, addCardForm);
  addCardFormValidator.enableValidation();
  //клик по кнопке "добавить"
  addButton.addEventListener('click', () => {
    //clearForm(popupAdd);
    //openPopup(popupAdd);
    addCardFormValidator.toggleButtonState();
    addCardFormValidator.clearValidationErrors(popupAdd);
    //updateForm();
  });
}


cardList.renderItems();
enableValidation(validationConfig);
