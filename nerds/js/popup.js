var link = document.querySelector(".map__button");

var popup = document.querySelector(".modal-write-us");
var overlay = document.querySelector(".modal__overlay");
var close = document.querySelector(".modal-close");

var fieldName = document.querySelector(".appointment__input--name");
var form = document.querySelector(".appointment-form");
var fieldEmail = document.querySelector(".appointment__input--email");
var fieldTextarea = document.querySelector(".appointment__input--textarea");

var isStorageSupport = true;
var storage = "";
// Проверяем работает ли localStorage
try {															
	storage = localStorage.getItem("fieldName");
} catch (err) {
	isStorageSupport = false;
}
// отслеживаем клик на кнопку "написать нам", добавляем класс modal-show, проверяем localStorage
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-overlay-show");
	
	if (storage) {
		fieldName.value = storage;
		fieldEmail.focus();
	} else {
		fieldName.focus();
	}
});
// отслеживаем клик на крестик, удаляем класс modal-show
close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-error")
});
// отслеживаем отправку формы, неработает анимация
form.addEventListener("submit", function (evt) {
	if (!fieldName.value || !fieldEmail.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("fieldName", fieldName.value);
		}
	}
	
});
// отслеживаем нажатие на клавишу ESC удаляем класс modal-show
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		
		if (popup.classList.contains("modal-show") || overlay.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});

