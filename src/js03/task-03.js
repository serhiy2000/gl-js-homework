// Задание 3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

console.log('==== task 3.03 ====');
const findBestEmployee = function (employees) {
	let max = 0;
	let ind = 0;
	for (let key of Object.keys(employees)) {
		if (employees[key] > max) {
			max = employees[key];
			ind = key;
		}
	}

	return ind;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
	findBestEmployee({
		ann: 29,
		david: 35,
		helen: 1,
		lorence: 99,
	})
); // lorence

console.log(
	findBestEmployee({
		poly: 12,
		mango: 17,
		ajax: 4,
	})
); // mango

console.log(
	findBestEmployee({
		lux: 147,
		david: 21,
		kiwi: 19,
		chelsy: 38,
	})
); // lux
