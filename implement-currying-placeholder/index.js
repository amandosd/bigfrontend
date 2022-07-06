function curry(fn) {
  return function curried(...attr) {
    if (attr.length >= fn.length && !attr.includes(curry.placeholder)) {
      return fn.apply(this, attr);
    } else {
      return function (...attr2) {
        return curried.apply(this, [
          ...attr.map((a) =>
            a === curry.placeholder && attr2.length ? attr2.shift() : a
          ),
          ...attr2
        ]);
      };
    }
  };
}

curry.placeholder = Symbol("foo");

export const curryingWithPlaceholder = () => {
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
  };

  const curriedJoin = curry(join);

  const _ = curry.placeholder;
  //console.log(curriedJoin(1, 2, 3)); // '1_2_3'

  //console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'

  console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'
};
