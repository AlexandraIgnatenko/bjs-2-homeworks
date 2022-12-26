"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let rootFirst;
  let rootSecond;
  let d = Math.pow(b,2) - 4 * a * c;

  if (d < 0) {
    console.log('Пустой массив');
  } else if (d === 0) {
    rootFirst = - b / 2 * a;
    arr.push(rootFirst);
    console.log(arr);
  } else {
    rootFirst = (-b + Math.sqrt(d))/(2*a);
    rootSecond = (-b - Math.sqrt(d))/(2*a);
    arr.push(rootFirst, rootSecond);
    console.log(arr);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let payment;
  let sumCount;
  let monthlyPercent = percent / 100/ 12;
  let creditBody = amount - contribution;

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
   return false;
  }

  payment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));
  sumCount = parseFloat((payment * countMonths).toFixed(2));

  return sumCount;
}