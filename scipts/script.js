const initialCards = [
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

function likeFunc(button){
  button.target.classList.toggle('elements__card-like_active');
}

function deleteFunc(button){
  button.target.parentNode.remove();
}

function addCard(item) {
  let cards = document.querySelector('.elements__cards');

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.elements__card-image').src = item.link;
  cardElement.querySelector('.elements__card-image').alt = item.name;
  cardElement.querySelector('.elements__card-title').textContent = item.name;

  cards.append(cardElement);

  let likeButtons = document.querySelectorAll('.elements__card-like');
  likeButtons[likeButtons.length-1].addEventListener('click', likeFunc);

  let deleteButtons = document.querySelectorAll('.elements__card-delete');
  deleteButtons[deleteButtons.length-1].addEventListener('click', deleteFunc);
}

initialCards.reverse().forEach(addCard);

let editButton = document.querySelector('.portfolio__button-edit');
let popup_edit = document.querySelector('#popup_edit');
let overlay = document.querySelector('.overlay');

/*клик по кнопке редактировать*/
editButton.addEventListener('click', function(){
  popup_edit.classList.add('popup_opened');
  overlay.classList.add('overlay_active');
  updateForm();
});

let closePopupButton = popup_edit.querySelector('.popup__button-close');

/*клик по крестику на форме*/
closePopupButton.addEventListener('click', function(){
  popup_edit.classList.remove('popup_opened');
  overlay.classList.remove('overlay_active');
});

/*ф-ия заполнения полей формы*/
function updateForm(){
  let name = document.querySelector('.portfolio__name');
  let about = document.querySelector('.portfolio__about');

  let inputName = popup_edit.querySelector('#input-name');
  let inputAbout = popup_edit.querySelector('#input-about');

  inputName.value = name.textContent;
  inputAbout.value = about.textContent;
}

// Обработка кнопки сохранить
// Находим форму в DOM
let formElement = popup_edit.querySelector('.popup__form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = popup_edit.querySelector('#input-name');
    let jobInput = popup_edit.querySelector('#input-about');

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.portfolio__name');
    let about = document.querySelector('.portfolio__about');

    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value;
    about.textContent = jobInput.value;

    popup_edit.classList.remove('popup_opened');
    overlay.classList.remove('overlay_active');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

let addButton = document.querySelector('.portfolio__button-add');
let popup_add = document.querySelector('#popup_add');

/*клик по кнопке добавить*/
addButton.addEventListener('click', function(){
  popup_add.classList.add('popup_opened');
  overlay.classList.add('overlay_active');

  //чистим поля при открытии формы
  let inputName = popup_add.querySelector('#input-name');
  let inputLink = popup_add.querySelector('#input-link');

  inputName.value = '';
  inputLink.value = '';
});

let closePopupAddButton = popup_add.querySelector('.popup__button-close');

/*клик по крестику на форме*/
closePopupAddButton.addEventListener('click', function(){
  popup_add.classList.remove('popup_opened');
  overlay.classList.remove('overlay_active');
});

// Обработка кнопки сохранить
// Находим форму в DOM
let popupAddFormElement = popup_add.querySelector('.popup__form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function popupAddFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = popup_add.querySelector('#input-name');
    let linkInput = popup_add.querySelector('#input-link');

    //Добавляем карточки
    addCard({
      name: nameInput.value,
      link: linkInput.value
    });

    popup_add.classList.remove('popup_opened');
    overlay.classList.remove('overlay_active');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupAddFormElement.addEventListener('submit', popupAddFormSubmitHandler);

