module.exports.run = data => {
  const stacks = {
    1: ['T', 'R', 'D', 'H', 'Q', 'N', 'P', 'B'],  
    2: ['V', 'T', 'J', 'B', 'G', 'W'],   
    3: ['Q', 'M', 'V', 'S', 'D', 'H', 'R', 'N'],   
    4: ['C', 'M', 'N', 'Z', 'P'],   
    5: ['B', 'Z', 'D'],   
    6: ['Z', 'W', 'C', 'V'],   
    7: ['S', 'L', 'Q', 'V', 'C', 'N', 'Z', 'G'],   
    8: ['V', 'N', 'D', 'M', 'J', 'G', 'L'],   
    9: ['G', 'C', 'Z', 'F', 'M', 'P', 'T'], 
  };

  for (const k in stacks) {
    stacks[k].reverse();
  }

  for (const line of data) {
        // move  5      from  4       to  9
    const [move, count, from, stackA, to, staskB] = line.split(" ");

    if (move !== "move") {
      continue;
    }

    const items = stacks[stackA].splice(stacks[stackA].length - count, count).reverse();
    stacks[staskB] = stacks[staskB].concat(items);
  }

  console.log(stacks, Object.keys(stacks).map(k => stacks[k][stacks[k].length - 1]).join(""));
};



// ZBDRNPMVH
// WDLPFNNNB