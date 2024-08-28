// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
let result = 5 + 5 + '5';
console.log(typeof result);
// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email
//символ @і рахує загальну кількість символів.Результат виведіть в консоль.
let email = "tymoshenko@gmail.com";
console.log(email.includes('@'));
// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName.
//До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
let my = "My";
let name = "name";
let is = "is";
let fullName = `${my} ${name} ${is}`;
console.log(fullName + " Viktor");
// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
//За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього:
//«Дякуємо, Олександро! До сплати 300 гривень»
let userName = "Mariia";
let total = 500;
alert("Дякуємо, " + userName + "! До сплати " + total + " гривень");