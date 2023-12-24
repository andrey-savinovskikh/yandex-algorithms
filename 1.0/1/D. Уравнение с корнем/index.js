const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8");
const [a, b, c] = file.trim().split('\n').map(Number);

const MANY_SOLUTIONS = 'MANY SOLUTIONS';
const NO_SOLUTION = 'NO SOLUTION';

const solve = (a, b, c) => {
    if (c < 0) {
        return NO_SOLUTION;
    }

    if (a === 0) {
        return b !== c ** 2 ? NO_SOLUTION : MANY_SOLUTIONS;
    }

    const x = (c ** 2 - b) / a;

    return Number.isInteger(x) ? x : NO_SOLUTION;
};

const res = solve(a, b, c);

fs.writeFileSync("output.txt", res.toString());