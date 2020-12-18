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

function addCard(item) {
  let cards = document.querySelector('.elements__cards');

  cards.insertAdjacentHTML('afterbegin',
  `<li class="elements__card">
  <div class="elements__card-image-container">
    <img src="${item.link}" alt="${item.name}" class="elements__card-image">
  </div>
  <div class="elements__text-container">
    <h2 class="elements__card-title">${item.name}</h2>
    <button type="button" class="elements__card-like"></button>
  </div>
  </li>`
  );
}

initialCards.reverse().forEach(addCard);

let editButton = document.querySelector('.portfolio__button-edit');
let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');

/*клик по кнопке редактировать*/
editButton.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  overlay.classList.add('overlay_active');
  updateForm();
});

let closePopupButton = popup.querySelector('.popup__button-close');

/*клик по крестику на форме*/
closePopupButton.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
  overlay.classList.remove('overlay_active');
});

/*ф-ия заполнения полей формы*/
function updateForm(){
  let name = document.querySelector('.portfolio__name');
  let about = document.querySelector('.portfolio__about');

  let inputName = popup.querySelector('#input-name');
  let inputAbout = popup.querySelector('#input-about');

  inputName.value = name.textContent;
  inputAbout.value = about.textContent;
}

// Обработка кнопки сохранить
// Находим форму в DOM
let formElement = popup.querySelector('.popup__form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = popup.querySelector('#input-name');
    let jobInput = popup.querySelector('#input-about');

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.portfolio__name');
    let about = document.querySelector('.portfolio__about');

    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value;
    about.textContent = jobInput.value;

    popup.classList.remove('popup_opened');
    overlay.classList.remove('overlay_active');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//кнопка like
function likeFunc(button){
  button.target.classList.toggle('elements__card-like_active');
}

let likeButtons = document.querySelectorAll('.elements__card-like');

for (let i = 0; i < likeButtons.length; i++){
  likeButtons[i].addEventListener('click', likeFunc);
}
