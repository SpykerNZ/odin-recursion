function mergeSort(arr) {
  console.log(`Input ${arr}`);
  // If the array is less than 2, return the array
  if (arr.length < 2) return arr;
  // Otherwise split the array in half
  const half = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half, arr.length));
  // and sort both halves!
  const result = [];
  let i = 0,
    j = 0;
  while (i + j < arr.length) {
    if (j >= right.length || left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result;
}

module.exports = mergeSort;
