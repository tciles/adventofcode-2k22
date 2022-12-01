const sortBySum = (a, b) => a.sum > b.sum ? -1 : 1;

const generateElfs = data => {
    const elfs = [];
    let sum = 0;

    for (line of data) {
        if (line !== '') {       
            sum += parseInt(line);
    
            continue;
        }
        
        elfs.push({id: elfs.length + 1, sum});
        sum = 0;
    }

    return elfs.sort(sortBySum);
}

module.exports.run = data => {
    const elfs = generateElfs(data);

    console.log("Question 1", elfs.splice(0, 1));
    console.log("Question 2", elfs.splice(0, 3).reduce((acc, line) => acc + line.sum, 0));
};
