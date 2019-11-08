const sub = (ele1, ele2) => ele1 - ele2;
module.exports = (first, ...rest) => rest.reduce(sub, first);