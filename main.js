import {carts, products} from "./data.js";

let isAuth = false;
let user_id = null;

let wrap = document.querySelector('.wrap');
let menu = document.createElement('nav');
wrap.prepend(menu);

// Симуляция входа пользователя
user_id = 1;
isAuth = true;
//

let li_login = document.createElement('a'),
    li_reg = document.createElement('a'),
    li_cart = document.createElement('a'),
    li_logout = document.createElement('a'),
    li_home = document.createElement('a');

function checkAuth() {
    if (isAuth) {
        menu.appendChild(li_home);
        menu.appendChild(li_cart);
        menu.appendChild(li_logout);

    } else {
        menu.appendChild(li_home);
        menu.appendChild(li_reg);
        menu.appendChild(li_login);
    }
}
checkAuth();

li_login.innerHTML = `<a href='#' class='menu__item''>Login</a>`;
li_login.querySelector('a').addEventListener('click', login);

li_reg.innerHTML = `<a href='#' class='menu__item'>Registration</a>`;
li_reg.querySelector('a').addEventListener('click', registration);

li_logout.innerHTML = `<a href='/' class='menu__item' onclick='logout(event)'>Logout</a>`;

li_home.innerHTML = `<a href='/' class='menu__item'>Home</a>`;
li_home.querySelector('a').addEventListener('click', showHome);

li_cart.innerHTML = `<a href='/cart' class='menu__item'>Cart</a>`;
li_cart.querySelector('a').addEventListener('click', showCart);

function login() {
    window.location.href = 'login.html';
}

function registration() {
    window.location.href = 'register.html';
}

function logout(event) {
    event.preventDefault();
    isAuth = false;
    user_id = null;
    checkAuth()
}


function showHome(event) {
    event.preventDefault();
    const productsElement = document.querySelector('.products');
    productsElement.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');
        productCard.insertAdjacentHTML('beforeend',
            `
        <img src="${product.image}" alt="${product.title}" class="product__image">
        <h4 class="product__title">${product.title}</h4>
        <p class="product__desc">${product.description}</p>
        <div class="mini">
            <p class="product__price">${product.price} ₽</p>
            ${isAuth ? `<button class="product__btn">Добавить в корзину</button>` : ''}
        </div>`
        );

        if (isAuth) {
            const btn = productCard.querySelector('.product__btn');
            btn.addEventListener('click', () => {
                if (isAuth) {
                    const cart = {
                        id: carts.length + 1,
                        user_id: user_id,
                        product: product,
                        total_price: product.price
                    };
                    carts.push(cart);
                }
                console.log(carts);
            });
        }

        productsElement.appendChild(productCard);
    });
}

function showCart(event) {
    event.preventDefault();

    let cartsElement = document.querySelector('.carts');
    if (!cartsElement) {
        cartsElement = document.createElement('div');
        cartsElement.classList.add('carts');
        document.querySelector('.wrap').appendChild(cartsElement);
    }

    const productsElement = document.querySelector('.products');
    cartsElement.innerHTML = '';
    productsElement.innerHTML = '';

    console.log(carts);
    let total = 0;

    carts.forEach(cart => {
        cartsElement.insertAdjacentHTML('beforeend',
            `
            <div class="cart">
                <img src="${cart.product.image}" alt="${cart.product.title}" class="cart__image">
                <h4 class="cart__title">${cart.product.title}</h4>
                <p class="cart__desc">${cart.product.description}</p>
                <div class="mini">
                    <p class="cart__price">${cart.product.price} ₽</p>
                    <button class="cart__btn">Заказать товар</button>
                </div>
            </div>`
        );
        total += cart.product.price;
    });

    const totalPriceElement = document.querySelector('.total__price');
    if (!totalPriceElement) {
        cartsElement.insertAdjacentHTML('beforebegin',
            `<div class='total__price'> 
                <h4> Общая стоимость </h4>
                <p> ${total} Руб.</p>
            </div>`
        );
    } else {
        totalPriceElement.innerHTML = `
            <h4> Общая стоимость </h4>
            <p> ${total} Руб.</p>
        `;
    }
}
