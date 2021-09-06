console.log('==== task 5.04 ====');

// Задание 4

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

const StringBuilder = function (string) {
	this._value = string;
};

const builder = new StringBuilder('.');

StringBuilder.prototype.append = function (string) {
	this._value = this._value + string;
};

StringBuilder.prototype.prepend = function (string) {
	this._value = string + this._value;
};

StringBuilder.prototype.pad = function (string) {
	this._value = string + this._value + string;
};

builder.append('^');
console.log(builder._value); // '.^'

builder.prepend('^');
console.log(builder._value); // '^.^'

builder.pad('=');
console.log(builder._value); // '=^.^='
