const form = document.forms.formOne;
const formName = form.elements.userName;
const formEmail = form.elements.email;
const formAge = form.elements.userAge;
const formSex = form.elements.userSex;
const formSelect = form.elements.optSelect;
const formPassword = form.elements.userPassword;
const formCheck = form.elements.checkbox;
const btn = document.querySelector('.form__submit');
const errorName = document.querySelector('.errorName');
const errorEmail = document.querySelector('.errorEmail');
const errorAge = document.querySelector('.errorAge');
const errorSex = document.querySelector('.errorSex');
const errorSelect = document.querySelector('.errorOpt');
const errorPassword = document.querySelector('.errorPassword');
const errorCheck = document.querySelector('.errorCheck');
const errorBtn = document.querySelector('.errorBtn');




formName.addEventListener('input', function () {
    const nameValue = formName.value;
    const nameMin = formName.minlength;
    if (nameValue === '') {
        formName.classList.add('error');
        errorName.textContent = 'Введите имя пользователя';
        errorName.style.color = 'rgb(183, 253, 97)';
        
    } else {
        formName.classList.remove('error');
        errorName.textContent = '';
    }
    });
formEmail.addEventListener('input', function () {
    const emailValue = formEmail.value;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (emailRegex.test(emailValue)) {
        formEmail.classList.remove('error');
        errorEmail.textContent = '';
    } else {
        formEmail.classList.add('error');
        errorEmail.textContent = 'Некорректный формат Email';
        errorEmail.style.color = 'rgb(183, 253, 97)';
    }
    });

    formAge.addEventListener('input', function () {
        const ageValue = formAge.value;
        if (ageValue === '') {
            formAge.classList.add('error');
            errorAge.textContent = 'Введите возраст';
            errorAge.style.color = 'rgb(183, 253, 97)';
        } else {
            formAge.classList.remove('error');
            errorAge.textContent = '';
        }
        });

            if(formSex.checked === false){
                formAge.classList.add('error');
                errorSex.textContent = 'Выбирете пол'
            } else{
                formAge.classList.remove('error');
                errorSex.textContent = '';
            };
