'use strict';

const functio = function (argument) {
  let result = `Вы ввели не строку`;
  if (typeof argument === "string") {
    const maxLength = 30;
    const string = argument.trim();
    if (string.length > maxLength) {
      result = string.substr(0, maxLength) + `...`;
    } else {
      result = string;
    }
  }
  return result;
};

console.log(`Результат: `, functio(666));
console.log(`Результат: `, functio(`  Короткая строка   `));
console.log(`Результат: `, functio(`  Длинная строка, которая содержит более чем тридцать символов   `));

