var fromJsonFileToTextFileSortedData = require('./prac1.js');

console.log('Starting part2');
var testMyPart2Module = fromJsonFileToTextFileSortedData.sortJsonAndSaveToAFile('source.json', 'destination.txt');
console.log('Finished part2');

console.log('Done Client Execution');