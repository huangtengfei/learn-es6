let val = 'value from module A';

let func = () => console.log('function from module A');

class ModlueClass {

	constructor(x) {
		this.x = x;
	}

	sayHi() {
		console.log('hi ' + this.x);
	}

}

export {val, func, ModlueClass};
