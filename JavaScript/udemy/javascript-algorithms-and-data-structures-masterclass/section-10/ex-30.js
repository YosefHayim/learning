// linear search pseudocode exercise
// this function accepts an array and a value
// loop though the array and check if the current array element is equal to the value
// if it is return index and if not found return -1

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number === target) {
      console.log(i);
      return i;
    }
  }
  console.log("-1");
  return -1;
};

linearSearch([10, 15, 20, 25, 30], 15); // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1
