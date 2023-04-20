function mergeSort(arr) {
  console.log(`Input ${arr}`);
  // If the array is of length 1, return the array
  if (arr.length <= 1) return arr;
  // Otherwise split the array in half and sort both halves!
  const half = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half));
  let i = 0;
  let j = 0;
  let result = [];
  while (i + j < arr.length) {
    if (j >= right.length || left[i] < right[j]) {
      result.push(left[i]);
      i = i + 1;
    } else {
      result.push(right[j]);
      j = j + 1;
    }
  }
  return result;
}

module.exports = mergeSort;
