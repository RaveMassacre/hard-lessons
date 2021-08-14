'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const day = new Date();
let dayOfWeek = day.getDay();
if (dayOfWeek === 0) { dayOfWeek = 6; } else { dayOfWeek--; }

week.forEach((day, i) => {
  let string = day;
  if (i === dayOfWeek) {
    string = `<b>${day}</b>`;
  } else {
    string = `${day}`;
  }
  if (i === 5 || i === 6) { string = `<i>${string}</i>`; }
  document.body.insertAdjacentHTML('beforeend', `<div>${string}</div>`);
});