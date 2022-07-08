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

function flat2(arr) {
  const stack = [...arr];
  const res = [];

  while (stack.length) {
    let next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  return res.reverse();
}

function flat3(arr, depth = 1) {
  const stack = arr.map((item) => [item, depth]);
  let res = [];

  while (stack.length) {
    const [item, itemDepth] = stack.pop();

    if (Array.isArray(item) && itemDepth > 0) {
      stack.push(...item.map((item) => [item, itemDepth - 1]));
    } else {
      res.push(item);
    }
  }

  return res.reverse();
}

export const implementFlat = () => {
  const arr = [1, [2], [3, [4]]];

  console.log(flat3(arr, 1));

  // console.log(flat(arr));
  // // [1, 2, 3, [4]]

  // console.log(flat(arr, 1));
  // // [1, 2, 3, [4]]

  // console.log(flat(arr, 2));
  // // [1, 2, 3, 4]
};
