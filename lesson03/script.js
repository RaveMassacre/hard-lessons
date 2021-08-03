'use strict';

let lang = `ru`;
if (lang === `ru`) {
  console.log(`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`);
} else if (lang === 'en') {
  console.log(`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`);
} else {
  console.log(`Нет таких значений!`);
}

switch (lang) {
  case `ru`:
    console.log(`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`);
    break;
  case `en`:
    console.log(`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`);
    break;
  default:
    console.log(`Нет таких значений!`);
}

let langArray = [];
langArray.ru = [`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`];
langArray.en = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
console.log(langArray[lang]);

const langArr = {
  ru: [`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`],
  en: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]
};
console.log(langArr[lang]);

const namePerson = ``;
console.log((namePerson === `Артём`) ? `Директор` :
  (namePerson === `Максим`) ? `Преподаватель` :
    `Студент`);