/**
 * 任意值（Any）用来表示允许赋值为任意类型。
 */

let myFavoriteNumber: string = 'Six';

// myFavoriteNumber = 6; -- Type '6' is not assignable to type 'string'.ts(2322)

// There's no issue for type 'any'
let myFavoriteNumber2: any = 'seven';
myFavoriteNumber2 = 7;

