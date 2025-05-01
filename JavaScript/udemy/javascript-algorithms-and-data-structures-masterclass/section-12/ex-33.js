// incorrect
// const bubbleSortPseudo = (arr) => {
//   // error handling

//   for (let i = arr.length - 1; i > 0; i--) {
//     let currentN = arr[i];
//     for (let j = 0; j < arr.length - 1; j++) {
//       let nextN = arr[j + 1];

//       if (nextN > currentN) {
//         currentN = nextN;
//       } else if (currentN > nextN) {
//         nextN = currentN;
//       } else {
//         break;
//       }
//     }
//     console.log(arr);
//     return arr;
//   }
// };

// correct
// const bubbleSort = (arr) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap arr[j] and arr[j + 1]
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

// bubbleSortPseudo([500, 9123, 432, 12, 40, 1, 9, 0, 8, 2, 1, 4, 5]);
