/**
 * 感谢：
 * 使用ES6进行开发的思考 [http://otakustay.com/es6-develop-overview/]
 * ECMAScript 6 入门 [http://es6.ruanyifeng.com/]
 */

//=========================关键字类============================

/**
 * let
 * 块级作用域变量
 */

{
	let x = 3;
	//let x = 5;	// error: Duplicate declaration "x"
}
//console.log(x);		// error: x is not defined

/**
 * const
 * 常量，块级作用域
 */

const y = 5;
//y = 7;		// error: "y" is read-only

/**
 * for...of
 * 可通过 typeof o[Symbol.iterator] === 'function' 判断是否可迭代
 * 对于仅一个语句的循环操作，建议使用 array.forEach 方法配合箭头函数，多个语句时使用 for...of 
 */

let array = [9, 7, 5, 3, 1];

array.forEach((item, index) => console.log(index + ':' + item));

for(let item of array){
	item++;
	console.log(item);
}


/**
 * Set
 * 类似于数组，但是成员的值唯一
 * 操作方法：add(value); delete(value); has(value)-返回一个布尔值, clear()-清除所有成员
 * 遍历方法：keys(); values(); entries()-返回一个键值对的遍历器; forEach()
 */

var set = new Set([1, 2, 3, 4, 4]);
set.add(6);
set.delete(3);
console.log(set.has(2)); // true
for(let s of set){
	console.log(s); // 1, 2, 4, 6
}
for(let s of set.entries()){
	console.log(s); // [1, 1], [2, 2], [4, 4], [6, 6], 由于Set结构没有键名，所以键名和键值是同一值
}
set.clear();
console.log(set); // Set {}

/**
 * Map
 * 类似于对象，键值对集合，但键的范围不限于字符串
 * size 属性，返回 Map 结构的成员总数
 * 操作方法：set(key, value), get(key), has(key), delete(key), clear()
 * 遍历方法：keys(); values(); entries(); forEach()
 * 当元素或者键值有可能不是字符串时、有移除操作的需求时、需要遍历功能时、不重复集合时使用 Set 或 Map
 * 即仅当表达一个仅有增量 Map ，且这个 Map 的键值是字符串才使用普通对象
 */

var map = new Map([["name", "路人甲"], ["title", "码农"]]);
map.size // 2
console.log(map.has('name')) // true
map.set('title', '攻城狮')
map.get('title') // 攻城狮
for (let m of map.entries()) {
  console.log(m[0], m[1]);	// name 路人甲, title 攻城狮
}

//========================语法增强类===========================

/**
 * 箭头函数(=>)
 * 尽量使用箭头函数替换 function 关键字
 * 除非在需要函数名称的自递归、运行时可变的 this 对象等场景不用
 * 箭头函数中 this 对象是固定的，指向定义时所在对象，不能用 call()、apply()、bind() 改变 this 指向
 */

// 无参数或多个参数时，用 () 包裹，一个参数时也尽量如此，保持一致
let f1 = () => 'a value from no param function';
console.log(f1());

// 参数有默认值时用 es6 默认值格式；函数有多条语句时用大括号括起来
let f2 = (a = 2, b = 3) => {
	console.log(++a); 
	console.log(a * b);
}
f2();

/**
 * 增强的对象字面量
 * 定义对象、类中的方法
 */

let foo = {
	a: 'hello world',
	bar() {
		console.log('this is a function in object')
	}
}

console.log(foo.a);
foo.bar();

/**
 * 解构
 * 从数组和对象中提取值，对变量进行赋值
 * 不要一次通过解构定义过多的变量，建议不要超过5个
 */

// 数组的解构
let [a, b, c] = [2, 5, 6];
console.log('a is ' + a + ', b is ' + b + ', c is ' + c);

// 对象的解构
let {v1, v2} = {
	v1: 'aaa', 
	v2: 'bbb'
}
console.log('v1 is ' + v1 + ', v2 is ' + v2);


/**
 * 扩展运算符(...)
 * 将一个数组转为用逗号分隔的参数序列
 * 不要一次通过解构定义过多的变量，建议不要超过5个
 */

let arr = [1, 2, 3];
let add = (a, b, c) => a + b + c;
console.log(add(...arr));

//=========================Class和Module============================

/**
 * class
 * 定义类，有一个 constructor 方法（如果没有显式创建会默认添加一个空 constructor）
 * 类的所有方法（除constructor外）都定义在类的 prototype 属性上面，且不可枚举
 * 在继承时，子类必须在 constructor 方法中调用 super 方法，否则新建实例时会报错
 * 这是因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工
 */

// 基本类
class Person {

 	constructor(name, age){
 		this.name = name;
 		this.age = age;
 	}

 	toString() {
 		console.log(this.name + ' is ' + this.age + ' years old');
 	}

 }

 let zhangsan = new Person('张三', 24);
 zhangsan.toString();

 console.log(zhangsan.hasOwnProperty('name'));	// true
 console.log(zhangsan.hasOwnProperty('toString'));	// false

// 继承
class Student extends Person {

	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	toString() {
		console.log(this.name + ' is ' + this.age + ' years old, his major is ' + this.major);
	}

}

let lisi = new Student('李四', 22, 'SSE');
lisi.toString();

/**
 * module
 * es6 的模块体系主要由两个命令组成： export 命令和 import 命令
 * export：规定模块的对外接口，可以输出变量、函数和类；
 *		   可以直接输出单个变量，或者用大括号输出一组变量；	
 *         输出的变量就是本来的名字，可以用 as 重命名；
 *         可以出现在模块顶层的任何位置，不能位于块级作用域内；
 * 		   export default 可以指定默认输出
 * import：加载其他模块提供的功能，可以嵌套加载
 *		   整体加载可以用 import * as xx obj from 'yy'，等价于 module 命令：module xx from 'yy'	
 */

// 整体加载
import * as moduleA from './moduleA';

console.log(moduleA.val);
moduleA.func();
let mc = new moduleA.ModlueClass('htf');
mc.sayHi();

// 部分加载
import {firstName, lastName} from './moduleB';

console.log(firstName + ' ' + lastName);

// 加载默认输出
import someFunc from './moduleC';

someFunc();