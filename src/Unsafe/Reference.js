export var reallyUnsafeRefEq = function (a) {
  return function (b) {
    return a === b;
  };
};
