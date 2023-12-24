const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8");
const [t, mode] = file.split('\n');
const [troom, tcond] = t.split(' ');

const MODES = {
    FREEZE: 'freeze',
    HEAT: 'heat',
    AUTO: 'auto',
    FAN: 'fan'
}

const calculateTemperature = (troom, tcond, mode) => {
	switch (mode) {
    	case MODES.FAN:
        	return troom;
        case MODES.AUTO:
        	return tcond;
        case MODES.HEAT:
        	return tcond > troom ? tcond : troom;
        case MODES.FREEZE:
        	return tcond > troom ? troom : tcond;
        default:
        	return null;
    }
};

const res = calculateTemperature(Number(troom), Number(tcond), mode);

fs.writeFileSync("output.txt", res.toString());