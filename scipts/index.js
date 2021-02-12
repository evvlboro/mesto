import Card from './Card.js'
import FormValidator from './FormValidator.js'
import { initialCards, overlay, page, popupImgElement, cards, closePopupAddButton, editButton, popupAdd,
  popupAddFormElement, nameInput, linkInput, popupEdit, profileForm, inputName, inputAbout,
  closePopupButton, addButton, portfolioName, portfolioAbout, validationConfig, addCardForm} from './constants.js'
import Section from './Section.js';

function clickEscapeWhenPopupOpened(event){
  if (event.key === 'Escape') {
    const popup_opened = document.querySelector('.popup_opened');
    if (popup_opened) {
      closePopup(popup_opened);
    }
  }
}

function clearForm(popup) {
  const popupForm = popup.querySelector('.popup__form');
  popupForm.reset();
}

// export function openPopup(popup){
//   popup.classList.add('popup_opened');
//   overlay.classList.add('overlay_active');
//   page.classList.add('page_no-scroll');

//   document.addEventListener('keydown', clickEscapeWhenPopupOpened);
// }

// export function closePopup(popup){
//   popup.classList.remove('popup_opened');
//   overlay.classList.remove('overlay_active');
//   page.classList.remove('page_no-scroll');

//   document.removeEventListener('keydown', clickEscapeWhenPopupOpened);
// }

// popupImgElement.querySelector('.popup__button-close').addEventListener('click', function(){
//   closePopup(popupImgElement);
// });

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, '#card-template');
      return card.generateCard();
    }
  },
  '.elements__cards'
);

cardList.renderItems();

/*клик по крестику на форме*/
// closePopupButton.addEventListener('click', function(){
//   closePopup(popupEdit);
// });

/*ф-ия заполнения полей формы*/
function updateForm(){
  inputName.value = portfolioName.textContent;
  inputAbout.value = portfolioAbout.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Вставьте новые значения с помощью textContent
    portfolioName.textContent = inputName.value;
    portfolioAbout.textContent = inputAbout.value;

    closePopup(popupEdit);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', handleProfileSubmit);


/*клик по крестику на форме*/
closePopupAddButton.addEventListener('click', function(){
  closePopup(popupAdd);
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleCardSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM


    //Добавляем карточки
    addCard({
      name: nameInput.value,
      link: linkInput.value
    });

    closePopup(popupAdd);
    nameInput.value = '';
    linkInput.value = '';
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// popupAddFormElement.addEventListener('submit', handleCardSubmit);


function clickOverlay(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'));
  }
}

const popups = document.querySelectorAll('.popup');
Array.from(popups).forEach(
  (item) => {
    item.addEventListener('click', (event) => {
      clickOverlay(event);
    });
  }
);

//Валидация форм
function enableValidation(obj){
  const profileFormValidator = new FormValidator(obj, profileForm);
  profileFormValidator.enableValidation();

  //клик по кнопке "редактировать"
  editButton.addEventListener('click', function(){
    clearForm(popupEdit);
    //openPopup(popupEdit);
    profileFormValidator.clearValidationErrors(popupEdit);
    updateForm();
  });

  const addCardFormValidator = new FormValidator(obj, addCardForm);
  addCardFormValidator.enableValidation();
  //клик по кнопке "добавить"
  addButton.addEventListener('click', () => {
    clearForm(popupAdd);
    //openPopup(popupAdd);
    addCardFormValidator.toggleButtonState();
    addCardFormValidator.clearValidationErrors(popupAdd);
    updateForm();
  });
}

enableValidation(validationConfig);
