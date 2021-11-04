/* task 1 */

function getFactorial(numb) {
  return numb === 1 ? 1 : numb * getFactorial(numb - 1);
}
console.log(getFactorial(3)); //6
/* const getFactorial = (numb) => {
    return numb === 1 ? 1 : numb * getFactorial(numb - 1);
  };
  console.log(getFactorial(3)); //6 */

/* task 2 */

function powNumb(num, degree) {
  return degree === 1 ? num : num * powNumb(num, degree - 1);
}
console.log(powNumb(5, 3)); //125
/* const powNumb = (num, degree) => {
    return degree === 1 ? num : num * powNumb(num, degree - 1);
  };
  console.log(powNumb(5, 3)); //125 */

/* task 3 */

function sumIntPositivNum(a, b) {
  return b === 0 ? a : sumIntPositivNum(++a, --b);
  /* if (b === 0) {
      return a;
    }
    return sumIntPositivNum(++a, --b); //return sumIntPositivNum(a + 1, b - 1) */
}
console.log(sumIntPositivNum(8, 2)); //10
