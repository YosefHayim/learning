// power
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry
// about negative bases and exponents.

// score 65/100
// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base ** exponent;
// }

// correct
// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }

//   if (exponent < 0) {
//     return 1 / power(base, -exponent);
//   }

//   return base * power(base, exponent - 1);
// }
power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16
