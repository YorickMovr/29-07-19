

const parsers = require('./parsers');
const operations = require('./operations');


const parserType = parsers.getParserType(...process.argv);
const parser = parsers[parserType];

const { operation, operands } = parser(process.argv);

const mathematicOperation = operations[operation];

const result = mathematicOperation(...operands);

console.log(result);