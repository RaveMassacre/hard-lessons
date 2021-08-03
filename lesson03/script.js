'use strict';

const langArr = {
  ru: [`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`],
  en: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]
};

let lang = (`ru`);
if (lang === `ru`) {
  console.log(langArr[lang]);
} else if (lang === `en`) {
  console.log(langArr[lang]);
} else {
  console.log(`Нет таких значений!`);
}

switch (lang) {
  case `ru`:
    console.log(langArr[lang]);
    break;
  case `en`:
    console.log(langArr[lang]);
    break;
  default:
    console.log(`Нет таких значений!`);
}

let langArray = [];
langArray.ru = [`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`];
langArray.en = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];
console.log(langArray[lang]);
console.log(langArr[lang]);

const namePerson = ``;
console.log((namePerson === `Артём`) ? `Директор` :
  (namePerson === `Максим`) ? `Преподаватель` :
    `Студент`);