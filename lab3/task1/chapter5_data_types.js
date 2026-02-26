'use strict';

// Strings
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('john'));

// Spam check
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('innocent rabbit'));

// Truncate text
function truncate(str, maxlength) {
  return str.length > maxlength
    ? str.slice(0, maxlength - 1) + '…'
    : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));

// Extract currency
function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));

// Arrays
let numbers = [1, 2, 15, 0, -5];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Map
let map = new Map();
map.set('name', 'Aydana');
map.set('age', 19);
console.log(map.get('name'));