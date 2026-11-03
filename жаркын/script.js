// Меняйте эти числа, чтобы настроить форму.
const PASSWORD_CHARACTER_COUNT = 1;
const PHONE_MAX_DIGITS = 8;

const form = document.getElementById("registration-form");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");
const phone = document.getElementById("phone");
const message = document.getElementById("form-message");

phone.maxLength = PHONE_MAX_DIGITS;
password.minLength = PASSWORD_CHARACTER_COUNT;
password.maxLength = PASSWORD_CHARACTER_COUNT;
repeatPassword.minLength = PASSWORD_CHARACTER_COUNT;
repeatPassword.maxLength = PASSWORD_CHARACTER_COUNT;

function checkPasswords() {
    if (password.value !== repeatPassword.value) {
        repeatPassword.setCustomValidity("Пароли не совпадают.");
    } else {
        repeatPassword.setCustomValidity("");
    }
}

password.addEventListener("input", checkPasswords);
repeatPassword.addEventListener("input", checkPasswords);
phone.addEventListener("input", function () {
    phone.value = phone.value.replace(/\D/g, "").slice(0, PHONE_MAX_DIGITS);
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkPasswords();

    if (form.checkValidity()) {
        message.textContent = "Форма заполнена. Чтобы отправлять заявки, нужно подключить сайт к обработчику.";
    } else {
        form.reportValidity();
    }
});
