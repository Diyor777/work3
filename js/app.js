// Основное;

let first_name = prompt('Как вас зовут?');
let card_number = prompt('Номер счета?');
let cash_out = prompt('Укажите счет?');
let withdraw_money = prompt('Сколько обналичить?');
let withdrew_money = confirm(`Вы сняли ${withdraw_money}`);

if (first_name === 'Alex') {
    console.log('Добро пожаловать!');
} else {
    console.log('Пользователь не найден, досвидули!')
}
// ---------------------------------------------------------------
if (card_number === '7777') {
    console.log('7777');
} else {
    console.log('Попробуйте сначала ввести номер счета!')
}
// ---------------------------------------------------------------
if (cash_out === '10000') {
    console.log('10000 сум');
} else {
    console.log('Попробуйте ввести счет сначала!')
}
// ---------------------------------------------------------------
if (withdraw_money < 10000) {
    console.log('Все отлично!');
} else {
    console.log('Недостаточно средств!')
}

// Дополнительное;

//1. Отобразите окно подтверждения и выведите то, что пользователь щелкнул:
//2. Отобразите окно подсказки, в котором у пользователя спрашивают ее / его имя, и выведите сообщение:
//3. напишите prompt () в котором будет предложено указать ваш любимый напиток.

// №1
let click = confirm('Хотите щелкнуть?');

if (click === true) {
    console.log('Вы щелкнули!')
} else {
    console.log('Вы не щелкнули!')
}

// №2
let firstName = alert('Как вас зовут?')

console.log(firstName);

// №3
let drink = prompt('Какой напиток вы любите? Выбирайте: Cola, Pepsi, Fanta, Sprite.');

if (drink === 'Cola') {
    console.log('Значит, вы любите колу!')
} else if (drink === 'Pepsi') {
    console.log('Значит, вы любите пепси!');
} else if (drink === 'Fanta') {
    console.log('Значит, вы любите фанту!');
} else if (drink === 'Sprite') {
    console.log('Значит, вы любите фанту!');
} else {
    console.log('Вы не выбрали напиток!')
}