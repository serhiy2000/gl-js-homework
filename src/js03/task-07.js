console.log('==== task 3.07* ====');

// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
	// Текущий баланс счета
	balance: 0,

	// История транзакций
	transactions: [],

	/*
	 * Метод создает и возвращает объект транзакции.
	 * Принимает сумму и тип транзакции.
	 */
	createTransaction(amount, type) {
		return {
			id: this.transactions.length,
			amount: amount,
			type: type,
		};
	},

	/*
	 * Метод отвечающий за добавление суммы к балансу.
	 * Принимает сумму танзакции.
	 * Вызывает createTransaction для создания объекта транзакции
	 * после чего добавляет его в историю транзакций
	 */
	deposit(amount) {
		this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
		this.balance += amount;
		return this;
	},

	/*
	 * Метод отвечающий за снятие суммы с баланса.
	 * Принимает сумму танзакции.
	 * Вызывает createTransaction для создания объекта транзакции
	 * после чего добавляет его в историю транзакций.
	 *
	 * Если amount больше чем текущий баланс, выводи сообщение
	 * о том, что снятие такой суммы не возможно, недостаточно средств.
	 */
	withdraw(amount) {
		if (this.balance - amount < 0) {
			console.log('Not enougth money');
		} else {
			this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
			this.balance -= amount;
		}
		return this;
	},

	/*
	 * Метод возвращает текущий баланс
	 */
	getBalance() {
		return this.balance;
	},

	/*
	 * Метод ищет и возвращает объект транзации по id
	 */
	getTransactionDetails(id) {
		return this.transaction[id - 1];
	},

	/*
	 * Метод возвращает количество средств
	 * определенного типа транзакции из всей истории транзакций
	 */
	getTransactionTotal(type) {
		let result = [];
		for (let transaction of transactions) {
			if ((transaction.type = type)) {
				result.push(transaction);
			}
		}
		return result;
	},
};

console.log(account.deposit(100).deposit(44).withdraw(1199).getBalance());
