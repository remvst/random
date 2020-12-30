'use strict';

export function randInt(min: number, max: number): number {
    return ~~(randFloat(min, max + 1));
}

export function randFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function randPick<T>(values: T[]): T {
    if (values.length === 0) {
        throw new Error('Empty values provided');
    }
    return values[randInt(0, values.length - 1)];
}

export function randPickSet<T>(values: T[], n: number): T[] {
    values = values.slice();

    const result = [];
    for (let i = 0 ; i < n && values.length ; i++) {
        const pickedIndex = randInt(0, values.length - 1);
        result.push(values[pickedIndex]);
        values.splice(pickedIndex, 1);
    }

    return result;
}

export function randBool(likelihood: number): boolean {
    return Math.random() < likelihood;
}
