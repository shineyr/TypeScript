/**
 * Wiki: https://ts.xcatliu.com/basics/primitive-data-types
 */

 /**
  * boolean
  */

let isDone: boolean = true;

// 使用构造函数 Boolean 创造的对象不是布尔值，所以下面写法是错误的
// let createdByNewBoolean: boolean = new Boolean(1); 

let createdByNewBoolean: Boolean = new Boolean(1);

// 直接调用 Boolean 也可以返回一个 boolean 类型：
let createdByBoolean: boolean = Boolean(1);

/**
 * number
 */
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


/**
 * string
 */

let myName: string = 'Ria Yang';
let myAge: number = 28;

// 模板字符串, 其中 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式。
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old after 3 months.`;


/**
 * void
 */

// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName(): void {
    alert('My name is Tom');
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined;

/**
 * Null 和 Undefined
 */

// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
let u: undefined = undefined;
let n: null = null;

let num: number = undefined;

let u2: undefined;
let num2: number = u2;

// 而 void 类型的变量不能赋值给 number 类型的变量
let u3: void;
// let num3: number = u3;  -- Type 'void' is not assignable to type 'number'

