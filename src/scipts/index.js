import '../pages/index.css';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {
  initialCards, overlay, page, popupImgElement, cards, closePopupAddButton, avatarButton, editButton, popupAdd,
  popupAddFormElement, nameInput, linkInput, popupAvatar, popupEdit, avatarForm, profileForm, inputName, inputAbout,
  closePopupButton, addButton, portfolioName, portfolioAbout, portfolioAvatar, validationConfig, addCardForm, popupImage
} from './constants.js';
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
    items:
      api.getInitalCardsList()
        .then((data) => {
          return data.reverse();
        })
        .catch((error) => {
          console.log(error);
        }),
    renderer: (item) => {
      createCard(item);
    }
  },
  cards
);

const avatarPopup = new PopupWithForm(
  popupAvatar,
  (data) => {
    const saveButton = popupAvatar.querySelector('.popup__button-save');
    saveButton.textContent = 'Сохранение...';
    api.setAvatar(data.link)
      .then((result) => {
        userInfo.setUserInfo(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        avatarPopup.close();
        saveButton.textContent = 'Сохранить';
      });
  });

const editPopup = new PopupWithForm(
  popupEdit,
  (data) => {
    const saveButton = popupEdit.querySelector('.popup__button-save');
    saveButton.textContent = 'Сохранение...';
    api.setUserInfo(data.name, data.about)
      .then((result) => {
        userInfo.setUserInfo(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        editPopup.close();
        saveButton.textContent = 'Сохранить';
      });
  });

function createCard(data) {

  const card = new Card(data, '#card-template',
    {
      handleCardClick: () => {
        popupWithImage.open(data);
      }
    },
    {
      setLikeAPI: (callback) => {
        api.setLike(data._id)
          .then((result) => {
            callback(result);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
    {
      removeLikeAPI: (callback) => {
        api.removeLike(data._id)
          .then((result) => {
            callback(result);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    },
    { userId: userInfo.getUserInfo().userId }
  );
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

const addPopup = new PopupWithForm(
  popupAdd,
  (data) => {
    const saveButton = popupAdd.querySelector('.popup__button-save');
    saveButton.textContent = 'Сохранение...';
    api.sendCard(data)
      .then((result) => {
        createCard(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        addPopup.close();
        saveButton.textContent = 'Сохранить';
      });


  });

popupWithImage.setEventListeners();
avatarPopup.setEventListeners();
addPopup.setEventListeners();
editPopup.setEventListeners();

avatarButton.addEventListener("click", function () {
  avatarPopup.open();
});

editButton.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputAbout.value = data.about;
  editPopup.open();
});

addButton.addEventListener("click", function () {
  addPopup.open();
});

//Валидация форм
function enableValidation(obj) {
  const avatarFormValidator = new FormValidator(obj, avatarForm);
  avatarFormValidator.enableValidation();
  //клик по аватарке
  avatarButton.addEventListener('click', () => {
    avatarFormValidator.toggleButtonState();
    avatarFormValidator.clearValidationErrors(popupAvatar);
  });

  const profileFormValidator = new FormValidator(obj, profileForm);
  profileFormValidator.enableValidation();

  //клик по кнопке "редактировать"
  editButton.addEventListener('click', function () {

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
