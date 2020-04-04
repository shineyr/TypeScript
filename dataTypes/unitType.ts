let myFavoriteNumber: string | number;
myFavoriteNumber = 'Six';
myFavoriteNumber = 6;

// myFavoriteNumber = true;         -- Type 'true' is not assignable to type 'string | number'.ts(2322)


/**
 * 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
 */

 function getLength(something: string | number) {
     // return something.length; -- Incorrect
 }

 function getStr(something: string | number) {
    return something.toString();
}


/**
 * 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
 */
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5

myFavoriteNumber = 7;
//console.log(myFavoriteNumber.length);  -- Property 'length' does not exist on type 'number'.ts(2339)
