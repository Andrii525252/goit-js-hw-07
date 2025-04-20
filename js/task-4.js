const formEl = document.querySelector('.js-login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailEl = document.querySelector('[name="email"]');
    const passwordEl = document.querySelector('[name="password"]');

    const emailTrim = emailEl.value.trim();
    const passwordTrim = passwordEl.value.trim();

    if (emailTrim === '' || passwordTrim === '') {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email: emailTrim,
        password: passwordTrim,
    }

    console.log(formData);

    formEl.reset();
})
