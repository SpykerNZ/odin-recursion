#!/usr/bin/node

function fibs_arr(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

function fibs_rec(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  arr = fibs_rec(n - 1);
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
}

module.exports = {};
module.exports.fibs_arr = fibs_arr;
module.exports.fibs_rec = fibs_rec;
