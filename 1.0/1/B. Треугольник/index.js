const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8");
const [a, b, c] = file.split('\n').map(Number);

const check = (a, b, c) => {
	if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
        return 'NO';
    }

    return 'YES';
};

const res = check(a, b, c);

fs.writeFileSync("output.txt", res.toString());