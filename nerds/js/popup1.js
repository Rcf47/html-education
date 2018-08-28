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
var link = document.querySelector(".map__button");

        var popup = document.querySelector(".modal-write-us");
        var close = popup.querySelector(".modal-close");

        var form = popup.querySelector("form");
        var login = popup.querySelector(".appointment__input--name");
        var password = popup.querySelector(".appointment__input--email");

        var isStorageSupport = true;
        var storage = "";

        try {
            storage = localStorage.getItem("login");
        } catch (err) {
            isStorageSupport = false;
        }

        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");

            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
            }
        });

        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function (evt) {
            if (!login.value || !password.value) {
                evt.preventDefault();
                popup.classList.remove("modal-error");
                popup.offsetWidth = popup.offsetWidth;
                popup.classList.add("modal-error");
            } else {
                if (isStorageSupport) {
                    localStorage.setItem("login", login.value);
                }
            }
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                    popup.classList.remove("modal-error");
                }
            }
        });

