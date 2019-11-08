const mult = (ele1, ele2) => ele1 * ele2;
module.exports = (...args) => args.reduce(mult, 1);