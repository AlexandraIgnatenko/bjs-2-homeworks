function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const initialValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); 
  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } else {
    const initialValue = 0;
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); 
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } else {
    const min = Math.min(...arr);
    const max = Math.max(...arr); 
    return max -  min;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } else {
    let sumEvenElements = 0;
    let sumOddElements = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElements += arr[i];
      } else {
        sumOddElements += arr[i];
      }
    }
    return sumEvenElements - sumOddElements;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length < 1) {
    return 0;
  } else {
    let sumEvenElements = 0;
    let countEvenElements = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElements += arr[i];
        countEvenElements ++;
      }   
    }
    return sumEvenElements / countEvenElements;
  }
}

function makeWork (arrOfArr, func) {
  let max = func(...arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > max) {
      max = funcResult;
    } 
  }
  return max;
}
