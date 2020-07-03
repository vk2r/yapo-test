const getCalculatedValue = (collection: Array<number>): number => {
  return collection
    .filter(number => number % 2 === 1)
    .map(number => number * 2)
    .reduce((total, current) => total + current, 0);
};

export default getCalculatedValue;
