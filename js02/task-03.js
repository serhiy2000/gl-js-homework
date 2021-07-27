// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

console.log('==== task 2.03 ====');

const findLongestWord = function (string) {
	string = string.split(' ');
	let max = {
		length: 0,
	};
	for (let item in string) {
		if (max.length < string[item].length) {
			max.length = string[item].length;
			max.word = string[item];
		}
	}
	return max.word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
