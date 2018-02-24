export function pipe(...functions) {
  return initialArg => functions.reduce((arg, func) => func(arg), initialArg);
}

export function compose(...functions) {
  return pipe(...functions.reverse());
}
