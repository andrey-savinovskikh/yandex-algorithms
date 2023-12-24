const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8");
const phoneNumbers = file.trim().split('\n');

const FULL_LENGTH = 11;
const SHORT_LENGTH = 7;
const DEFAULT_CODE = 495;

const formatPhoneNumber = (phoneNumber) => {
    const res = phoneNumber.replace(/\D/g, '');

    switch (res.length) {
        case FULL_LENGTH:
            return res.slice(1);
        case SHORT_LENGTH:
            return `${DEFAULT_CODE}${res}`;
        default:
            return res;
    }
}

const checkPhoneNumbers = (phoneNumbers) => {
    const [newPhoneNumber, ...phoneBook] = phoneNumbers.map(formatPhoneNumber);
	return phoneBook.map((phoneNumber) => phoneNumber === newPhoneNumber ? 'YES' : 'NO');
};

const res = checkPhoneNumbers(phoneNumbers);

fs.writeFileSync("output.txt", res.join('\n'));