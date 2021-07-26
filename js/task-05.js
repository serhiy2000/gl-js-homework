// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

console.log('==== task 05 ====');

let answer = prompt('Enter delivery country');
let country, deliverPrice;

switch (answer.toLowerCase()) {
	case 'china':
		country = 'China';
		deliverPrice = 100;
		break;
	case 'chile':
		country = 'Chile';
		deliverPrice = 250;
		break;
	case 'austalia':
		country = 'Australia';
		deliverPrice = 170;
		break;
	case 'india':
		country = 'India';
		deliverPrice = 80;
		break;
	case 'jamaica':
		country = 'Jamaica';
		deliverPrice = 120;
		break;
	default:
		country = 'unknown';
}

if (country !== 'unknown') {
	alert('Delivery to ' + country + ' will cost ' + deliverPrice + '.');
} else {
	alert('Delivery to your country (' + country + ') is impossible.');
}
