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

"use strict";

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var _moduleA = require('./moduleA');

var moduleA = _interopRequireWildcard(_moduleA);

// 部分加载

var _moduleB = require('./moduleB');

// 加载默认输出

var _moduleC = require('./moduleC');

var _moduleC2 = _interopRequireDefault(_moduleC);

{
  var x = 3;
  //let x = 5;	// error: Duplicate declaration "x"
}
//console.log(x);		// error: x is not defined

/**
 * const
 * 常量，块级作用域
 */

var y = 5;
//y = 7;		// error: "y" is read-only

/**
 * for...of
 * 可通过 typeof o[Symbol.iterator] === 'function' 判断是否可迭代
 * 对于仅一个语句的循环操作，建议使用 array.forEach 方法配合箭头函数，多个语句时使用 for...of 
 */

var array = [9, 7, 5, 3, 1];

array.forEach(function (item, index) {
  return console.log(index + ':' + item);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    item++;
    console.log(item);
  }

  /**
   * Set
   * 类似于数组，但是成员的值唯一
   * 操作方法：add(value); delete(value); has(value)-返回一个布尔值, clear()-清除所有成员
   * 遍历方法：keys(); values(); entries()-返回一个键值对的遍历器; forEach()
   */
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"]) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var set = new Set([1, 2, 3, 4, 4]);
set.add(6);
set["delete"](3);
console.log(set.has(2)); // true
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = set[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var s = _step2.value;

    console.log(s); // 1, 2, 4, 6
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = set.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var s = _step3.value;

    console.log(s); // [1, 1], [2, 2], [4, 4], [6, 6], 由于Set结构没有键名，所以键名和键值是同一值
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
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
map.size; // 2
console.log(map.has('name')); // true
map.set('title', '攻城狮');
map.get('title'); // 攻城狮
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = map.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var m = _step4.value;

    console.log(m[0], m[1]); // name 路人甲, title 攻城狮
  }

  //========================语法增强类===========================

  /**
   * 箭头函数(=>)
   * 尽量使用箭头函数替换 function 关键字
   * 除非在需要函数名称的自递归、运行时可变的 this 对象等场景不用
   * 箭头函数中 this 对象是固定的，指向定义时所在对象，不能用 call()、apply()、bind() 改变 this 指向
   */

  // 无参数或多个参数时，用 () 包裹，一个参数时也尽量如此，保持一致
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
      _iterator4["return"]();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

var f1 = function f1() {
  return 'a value from no param function';
};
console.log(f1());

// 参数有默认值时用 es6 默认值格式；函数有多条语句时用大括号括起来
var f2 = function f2() {
  var a = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];
  var b = arguments.length <= 1 || arguments[1] === undefined ? 3 : arguments[1];

  console.log(++a);
  console.log(a * b);
};
f2();

/**
 * 增强的对象字面量
 * 定义对象、类中的方法
 */

var foo = {
  a: 'hello world',
  bar: function bar() {
    console.log('this is a function in object');
  }
};

console.log(foo.a);
foo.bar();

/**
 * 解构
 * 从数组和对象中提取值，对变量进行赋值
 * 不要一次通过解构定义过多的变量，建议不要超过5个
 */

// 数组的解构
var a = 2;
var b = 5;
var c = 6;

console.log('a is ' + a + ', b is ' + b + ', c is ' + c);

// 对象的解构
var _v1$v2 = {
  v1: 'aaa',
  v2: 'bbb'
};
var v1 = _v1$v2.v1;
var v2 = _v1$v2.v2;

console.log('v1 is ' + v1 + ', v2 is ' + v2);

/**
 * 扩展运算符(...)
 * 将一个数组转为用逗号分隔的参数序列
 * 不要一次通过解构定义过多的变量，建议不要超过5个
 */

var arr = [1, 2, 3];
var add = function add(a, b, c) {
  return a + b + c;
};
console.log(add.apply(undefined, arr));

//=========================Class和Module============================

/**
 * class
 * 定义类，有一个 constructor 方法（如果没有显式创建会默认添加一个空 constructor）
 * 类的所有方法（除constructor外）都定义在类的 prototype 属性上面，且不可枚举
 * 在继承时，子类必须在 constructor 方法中调用 super 方法，否则新建实例时会报错
 * 这是因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工
 */

// 基本类

var Person = (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "toString",
    value: function toString() {
      console.log(this.name + ' is ' + this.age + ' years old');
    }
  }]);

  return Person;
})();

var zhangsan = new Person('张三', 24);
zhangsan.toString();

console.log(zhangsan.hasOwnProperty('name')); // true
console.log(zhangsan.hasOwnProperty('toString')); // false

// 继承

var Student = (function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, major) {
    _classCallCheck(this, Student);

    _get(Object.getPrototypeOf(Student.prototype), "constructor", this).call(this, name, age);
    this.major = major;
  }

  _createClass(Student, [{
    key: "toString",
    value: function toString() {
      console.log(this.name + ' is ' + this.age + ' years old, his major is ' + this.major);
    }
  }]);

  return Student;
})(Person);

var lisi = new Student('李四', 22, 'SSE');
lisi.toString();

console.log(moduleA.val);
moduleA.func();
var mc = new moduleA.ModlueClass('htf');
mc.sayHi();

console.log(_moduleB.firstName + ' ' + _moduleB.lastName);

(0, _moduleC2["default"])();
