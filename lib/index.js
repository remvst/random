'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.randBool = exports.randPickSet = exports.randPick = exports.randFloat = exports.randInt = void 0;
function randInt(min, max) {
    return ~~(randFloat(min, max + 1));
}
exports.randInt = randInt;
function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randFloat = randFloat;
function randPick(values) {
    if (values.length === 0) {
        throw new Error('Empty values provided');
    }
    return values[randInt(0, values.length - 1)];
}
exports.randPick = randPick;
function randPickSet(values, n) {
    values = values.slice();
    const result = [];
    for (let i = 0; i < n && values.length; i++) {
        const pickedIndex = randInt(0, values.length - 1);
        result.push(values[pickedIndex]);
        values.splice(pickedIndex, 1);
    }
    return result;
}
exports.randPickSet = randPickSet;
function randBool(likelihood) {
    return Math.random() < likelihood;
}
exports.randBool = randBool;
