function stray(numbers) {
  const newNumbers = Array.from(new Set(numbers));
  let count = 0;
  numbers.forEach(el => {if (el === newNumbers[0]) {
  count++;
  return count;
}})
  return count > 1 ? newNumbers[1] : newNumbers[0];
}