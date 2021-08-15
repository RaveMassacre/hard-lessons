'use strict';

const num = 266219;
let answer = 1;

num.toString().split('').forEach(function (item) {
  answer *= item
});

console.log(`Результат перебора: `, answer);

const degree = answer ** 3;


console.log(`Возведение в степень: `, degree);
console.log(`Первые две цифры числа: `, degree.toString().substring(0, 2));
