export const getUniqueRandomNums = (n) => {
  let set = new Set();
  while (set.size < n) {
    set.add(Math.floor(Math.random() * n));
  }
  return Array.from(set);
};
