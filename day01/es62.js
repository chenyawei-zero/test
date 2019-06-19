let arr = [1, 2, 3, 4, 5, 6];

let [num1] = arr;

console.log(num1);

let [num1, num2] = arr;
console.log(num1);
console.log(num2);

let [, , num3] = arr;
console.log(num3);

let [num1, ...num2] = arr;  // 剩余元素，只能有一个，只能放到最后面