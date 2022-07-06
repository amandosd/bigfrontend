function flat(arr, depth = 1) {
  let i = 0;
  const newArr = [];
  while (i < arr.length) {
    if (Array.isArray(arr[i]) && depth > 0) {
      newArr.push(...flat(arr[i], depth - 1));
    } else {
      newArr.push(arr[i]);
    }
    i++;
  }
  return newArr;
}

export const implementFlat = () => {
  const arr = [1, [2], [3, [4]]];

  flat(arr);

  // console.log(flat(arr));
  // // [1, 2, 3, [4]]

  // console.log(flat(arr, 1));
  // // [1, 2, 3, [4]]

  // console.log(flat(arr, 2));
  // // [1, 2, 3, 4]
};
