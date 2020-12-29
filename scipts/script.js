const overlay = document.querySelector('.overlay');
const page = document.querySelector('.page');

function likeFunc(button){
  button.target.classList.toggle('elements__card-like_active');
}

function deleteFunc(button){
  button.target.closest('.elements__card').remove();
}

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
  const popupInputs = popup.querySelectorAll('.popup__input');
  const popupInputErrors = popup.querySelectorAll('.popup__input-error');
  if (popupInputs){
    Array.from(popupInputs).forEach((item) => {
      item.classList.remove(validationConfig.inputErrorClass);
    });
  }
  if (popupInputErrors){
    Array.from(popupInputErrors).forEach((item) => {
      item.textContent = '';
    });
  }
  if (popupForm){
    popupForm.reset();
  }
}

function openPopup(popup){
  popup.classList.add('popup_opened');
  overlay.classList.add('overlay_active');
  page.classList.add('page_no-scroll');

  document.addEventListener('keydown', (event) => {
    clickEscapeWhenPopupOpened(event);
  });
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
  overlay.classList.remove('overlay_active');
  page.classList.remove('page_no-scroll');

  document.removeEventListener('keydown', clickEscapeWhenPopupOpened);
}

const popupImgElement = document.querySelector('#popup_img');
const popupImage = popupImgElement.querySelector('.popup__image');
const popupImageTitle = popupImgElement.querySelector('.popup__img-title');
popupImgElement.querySelector('.popup__button-close').addEventListener('click', function(){
  closePopup(popupImgElement);
});

function openPopupImg(event){
  popupImage.src = event.target.src;
  popupImage.alt = event.target.alt;
  popupImageTitle.textContent = event.target.alt;

  openPopup(popupImgElement);
}

const cards = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__card-image');
  const cardtTitle = cardElement.querySelector('.elements__card-title');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardtTitle.textContent = cardData.name;

  const likeButton = cardElement.querySelector('.elements__card-like');
  likeButton.addEventListener('click', likeFunc);

  const deleteButton = cardElement.querySelector('.elements__card-delete');
  deleteButton.addEventListener('click', deleteFunc);

  cardImage.addEventListener('click', openPopupImg);

  return cardElement;
}

function addCard(item) {
  const card = createCard(item);
  cards.prepend(card);
}

initialCards.forEach(addCard);

const popupEdit = document.querySelector('#popup_edit');

/*клик по кнопке редактировать*/
editButton.addEventListener('click', function(){
  clearForm(popupEdit);
  openPopup(popupEdit);
  updateForm();
});

const closePopupButton = popupEdit.querySelector('.popup__button-close');

/*клик по крестику на форме*/
closePopupButton.addEventListener('click', function(){
  closePopup(popupEdit);
});


const portfolioName = document.querySelector('.portfolio__name');
const portfolioAbout = document.querySelector('.portfolio__about');

const inputName = popupEdit.querySelector('#input-name');
const inputAbout = popupEdit.querySelector('#input-about');
/*ф-ия заполнения полей формы*/
function updateForm(){
  inputName.value = portfolioName.textContent;
  inputAbout.value = portfolioAbout.textContent;
}

// Обработка кнопки сохранить
// Находим форму в DOM
const profileForm = popupEdit.querySelector('.popup__form');

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

const popupAdd = document.querySelector('#popup_add');

/*клик по кнопке добавить*/
addButton.addEventListener('click', function(){
  clearForm(popupAdd);
  openPopup(popupAdd);
});

const closePopupAddButton = popupAdd.querySelector('.popup__button-close');

/*клик по крестику на форме*/
closePopupAddButton.addEventListener('click', function(){
  closePopup(popupAdd);
});

// Обработка кнопки сохранить
// Находим форму в DOM
const popupAddFormElement = popupAdd.querySelector('.popup__form');
const nameInput = popupAdd.querySelector('#add-input-name');
const linkInput = popupAdd.querySelector('#add-input-link');
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
popupAddFormElement.addEventListener('submit', handleCardSubmit);


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


