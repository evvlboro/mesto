let editButton = document.querySelector('.portfolio__button-edit');
let popup = document.querySelector('.popup');

/*клик по кнопке редактировать*/
editButton.addEventListener('click', function(){
  popup.classList.add('popup_opened');
  updateForm();
});

let closePopupButton = popup.querySelector('.popup__button-close');

/*клик по крестику на форме*/
closePopupButton.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
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
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

//кнопка like
function func(button){
  button.classList.toggle('elements__card-like_active');
}
