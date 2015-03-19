var fromJsonFileToTextFile = require('./prac1.js');

console.log('Client starting');
console.log('Starting part1')
var testMyPart1Module = fromJsonFileToTextFile.FromJsonFileToTextFile('source.json', 'destination.txt');
console.log('Finished part1 !');


console.log('Done Client Execution');
