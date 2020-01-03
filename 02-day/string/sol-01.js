// 1
const challenge = '30 Days Of JavaScript';

// 2
console.log('String:', challenge);

// 3
console.log('Length:', challenge.length);

// 4
console.log('Uppercase:', challenge.toUpperCase());

// 5
console.log('Lowercase:', challenge.toLowerCase());

// 6
console.log('Without first word (substr):', challenge.substr(3));
console.log('Without first word (substring):', challenge.substring(3));

// 7
console.log('First word (substr):', challenge.substr(0, 2));
console.log('First word (substring):', challenge.substring(0, 2));

// 8
const phrase =
  'You cannot end a sentence with because because because is a conjunction';
console.log('Part of phrase:', phrase.substr(31, 23));

// 9
console.log('Check for Script:', challenge.includes('Script'));

// 10
console.log('Characters:', challenge.split(''));

// 11
console.log('Characters:', challenge.split(' '));

// 12
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('Companies:', companies.split(', '));

// 13
console.log('JS to Python:', challenge.replace('JavaScript', 'Python'));
