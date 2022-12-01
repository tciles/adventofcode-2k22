const fs = require('fs');
const path = require('path');

const CHALLENGE = "1";
const DIR = path.resolve(CHALLENGE);

const data = fs.readFileSync(path.join(DIR, 'input.txt')).toString().split("\n");
const challenge = require(path.join(DIR, "main"));

challenge.run(data);
