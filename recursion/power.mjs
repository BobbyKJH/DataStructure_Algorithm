/** 지수함수 재귀 */

const power = (x, n) => {
  if(n == 0) return 1;
  return power(x, n - 1) * x;
}

console.log(power(2, 5))