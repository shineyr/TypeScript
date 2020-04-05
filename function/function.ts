/**
 * 在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）
 */

// Function Declaration
function sumInJs(x, y) {
    return x + y;
}

// Function Expression
let mySumInJs = function (x, y) {
    return x + y;
}


/**
 * 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单
 * 输入多余的（或者少于要求的）参数，是不被允许的
 */
function sumInTs(x: number, y: number): number {
    return x + y;
}

// 只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的
let mySumInTs = function(x: number, y: number): number {
    return x + y;
}

// 如果需要我们手动给 mySum 添加类型，则应该是这样
let mySumInTs2: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}


/**
 * 用接口定义函数的形状
 */

interface SearchFunc {
    (source: string, substr: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, substr: string): boolean {
    return source.search(substr) != -1;
}

/**
 * 可选参数
 */
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

/**
 * 参数默认值
 * 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数
 */
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat2 = buildName('Tom', 'Cat');
let tom2 = buildName('Tom');


/**
 * 剩余参数, ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
 */
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);

/**
 * 也可以使用数组类型
 */
function push2(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(items);
    });
}

let a2 = [];
push2(a2, 1, 2, 3);

/**
 * 使用联合类型实现函数重载
 * 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
 */

function reverse(x: number): number;
function reverse(x: string): string;

function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}





