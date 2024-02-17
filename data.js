let products = [
    {
        id: 1,
        image: 'assets/product1.png',
        title: 'Гяру не могут быть добры к отаку?! Том 1',
        description: 'Такуя Сэо — отаку, обожающий аним...',
        price: 460
    },
    {
        id: 2,
        image: 'assets/product2.png',
        title: 'One Piece. Большой куш. Книга 17.',
        description: 'Великая битва за возвращение дру...',
        price: 1085
    },
    {
        id: 3,
        image: 'assets/product3.png',
        title: 'Лериана, невеста герцога по контракту. Том 6',
        description: 'Лериана всё ближе подбирается к тайне сво...',
        price: 1215
    },
    {
        id: 4,
        image: 'assets/product4.png',
        title: 'Моб Психо 100. Том 8.',
        description: 'Финальная книга серии!',
        price: 878
    },
    {
        id: 5,
        image: 'assets/product5.png',
        title: 'Без игры жизни нет. Том 7.',
        description: 'После долгой и кровопролитной войны Дисборд навсегда из...',
        price: 515
    },
    {
        id: 6,
        image: 'assets/product6.png',
        title: 'Госпожа Кагуя: В любви как на войне. Любовная...',
        description: 'Чтобы спасти клан и семейный биз...',
        price: 1055
    },
    {
        id: 7,
        image: 'assets/product7.png',
        title: 'Медалистка. Том 3.',
        description: 'Инори Юицука и её тренер Цукаса Акэурадзи в убыс...',
        price: 635
    },
    {
        id: 8,
        image: 'assets/product8.png',
        title: 'Воин-скелет не смог защитить подземелье.',
        description: 'Судьба дает ему второй шанс..',
        price: 1880
    },
    {
        id: 9,
        image: 'assets/product9.png',
        title: 'Очень приятно, бог. Том 24.',
        description: 'Кирихито погиб, и Ятори решает присвоить те...',
        price: 380
    },
]

let users = [
    {id: 1, login: 'user1', password: '123', email: 'user1@email.ru'},
    {id: 2, login: 'user2', password: '123', email: 'user2@email.ru'},
    {id: 3, login: 'user3', password: '123', email: 'user3@email.ru'},
]

let carts = [
    {
        id: 1,
        user_id: 1,
        product: {
            id: 1,
            image: 'assets/product1.png',
            title: 'Гяру не могут быть добры к отаку?! Том 1',
            description: 'Такуя Сэо — отаку, обожающий аним...',
            price: 460
        },
    },
    {
        id: 1,
        user_id: 1,
        product: {
            id: 8,
            image: 'assets/product8.png',
            title: 'Воин-скелет не смог защитить подземелье.',
            description: 'Судьба дает ему второй шанс..',
            price: 1880
        },
    }
]

export {products, users, carts}