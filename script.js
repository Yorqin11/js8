// Example arrays
const group1 = ['non', 'banan', 'mashina'];
const group2 = ['asal', 'olma', 'aziza', 'Gul'];

const letterToFind = 'n';

// Finding words containing the letter 'n' in group1
const result1 = group1.filter(word => word.includes(letterToFind));
console.log(result1, 'n harfi ishtirok etgan sozlar');

// Finding words containing the letter 'n' in group2
const result2 = group2.filter(word => word.includes(letterToFind));
console.log(result2, 'n harfi ishtirok etmagan sozlar');