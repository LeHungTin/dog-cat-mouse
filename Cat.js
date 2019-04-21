var chalk = require('chalk');

function Cat() {
	this.name = 'Tom';
	this.age = 5;
}

Cat.prototype.sayHi = function() {
	console.log('Xin chao, my name is ' + chalk.red(this.name));
};

module.exports = Cat;