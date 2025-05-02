var mergeTwoLists = function (list1, list2) {
  if (list1.length === 0 && list2.length === 0) {
    console.log("[]");
    return [];
  }

  let longArr = [];

  for (let i = 0; i < list1.length; i++) {
    const n = list1[i];
    longArr.push(n);
  }

  for (let j = 0; j < list2.length; j++) {
    const n = list2[j];
    longArr.push(n);
  }
  longArr.sort((a, b) => a - b);
  console.log(longArr);
  return longArr;
};
mergeTwoLists([1, 2, 4], [1, 3, 4]);
mergeTwoLists([], []);
