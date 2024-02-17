import {users} from "./data.js";

let isAuth = false;

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_register')) {
        let form = document.forms.registration,
            login = form.elements[0].value,
            email = form.elements[1].value,
            password = form.elements[2].value,
            password2 = form.elements[3].value;
        event.preventDefault();

        if (password === password2 && password !== '') {
            users.push({ login, password, email });
            isAuth = true;
        } else {
            isAuth = false;
        }
    }
});

let user = {
    id: 2,
    login: 'user2',
    password: '123',
    email: 'user2@email.ru'
}
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn_login')) {
        let form = document.forms.login,
            email = form.elements[0].value,
            password = form.elements[1].value;
        event.preventDefault();
        isAuth = email === user.email && password === user.password;
    }
});
