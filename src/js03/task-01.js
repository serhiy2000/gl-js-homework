// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

console.log('==== task 3.01 ====');

const user = {
	name: 'Mango',
	age: 20,
	hobby: 'html',
	premium: true,
};
user.mood = 'Happy';
user.hobby = 'skydiving';
user.premium = false;
let obj = user;
for (let key of Object.keys(obj)) {
	console.log(`Key: ${key}, value: ${obj[key]}`);
}
