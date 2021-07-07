import '../pages/index.css';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, overlay, page, popupImgElement, cards, closePopupAddButton, editButton, popupAdd,
  popupAddFormElement, nameInput, linkInput, popupEdit, profileForm, inputName, inputAbout,
  closePopupButton, addButton, portfolioName, portfolioAbout, portfolioAvatar, validationConfig, addCardForm, popupImage} from './constants.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';
import Api from './Api';

const popupWithImage = new PopupWithImage(popupImgElement);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: '1a4ad76b-29b2-4dd1-8dcf-be36c0080f4b',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(portfolioName, portfolioAbout, portfolioAvatar);

api.getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((error) => {
    console.log(error);
  });

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item);
    }
  },
  cards
);

const editPopup = new PopupWithForm(
  popupEdit,
  (data) => {
    addButton.textContent = 'Сохранение...';
    api.setUserInfo(data.name, data.about)
      .then((res) => {
        addButton.textContent = 'Готово';
        userInfo.setUserInfo(res);
        editPopup.close();
      })
      .catch((error) => {
        console.log(error);
      });
});

function createCard(data) {
  const card = new Card(data, '#card-template', {
    handleCardClick: () => {
      popupWithImage.open(data);
    }
  });
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

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
  inputName.value = data.name;
  inputAbout.value = data.about;
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
