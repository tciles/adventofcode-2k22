const alphabet = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const calculatePriority = lines => lines.reduce((acc, [a, b, c = []]) => {
  const same = new Set(a.split("").filter(letter => b.indexOf(letter) > -1 && (c.length <= 0 || c.indexOf(letter) > -1)));
  const priority = [...same].reduce((acc, letter) => acc + alphabet.indexOf(letter) + 1, 0);
  return acc + priority
}, 0)

module.exports.run = data => {
  let lines = data.map(line => [line.slice(0, line.length/2), line.slice(line.length/2)]);
  const q1 = calculatePriority(lines);

  lines = [];
  for (let i = 0, l = data.length; i < l; i += 3) {
    lines.push([data[i], data[i+1], data[i+2]]);
  }

  const q2 = calculatePriority(lines);

  console.log(q1, q2)
};
