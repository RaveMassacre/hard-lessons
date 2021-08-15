'use strict';

const arr = ['1537', '453289', '5667921', '212456', '885414', '25669', '566421'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
    console.log(arr[i]);
  }
}

const divisor = function (elem) {
  let arr = [];
  if (elem !== 1) {
    arr.push(1);
    for (let j = 2; j * j <= elem; j++) {
      if (elem % j === 0) {
        arr.push(j);
      }
    }
  }
  arr.push(elem);
  return arr;
};

for (let i = 1; i <= 100; i++) {
  const n = divisor(i);
  if (n.length <= 2) {
    console.log(`${i} - является простым числом. Делители данного числа: ${n.join(', ')}`);
  }
}
for (let i = 1; i <= 100; i++) {
  console.log(`${i}: Делители этого числа: ${divisor(i).join(', ')}`);
}