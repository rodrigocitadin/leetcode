type Romans = {
    [key: string]: number
}

const romans: Romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanToInt(s: string): number {
    const numbers: number[] = s.split('').map(v => romans[v]);
    return numbers.reduce((acc, num, index) => num < numbers[index + 1] ?? 0 ? acc - num : acc + num, 0);
}
