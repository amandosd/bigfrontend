function curry(fn) {
  return function curryed(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curryed.apply(this, [...args, ...args2]);
      };
    }
  };
}

export const implementCurrying = () => {
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
  };

  const curriedJoin = curry(join);

  console.log(curriedJoin(1, 2, 3)); // '1_2_3'
  console.log(curriedJoin(1)(2, 3)); // '1_2_3'
  console.log(curriedJoin(1, 2)(3)); // '1_2_3'
  console.log(curriedJoin(1)(2)(3)); // '1_2_3'
};
