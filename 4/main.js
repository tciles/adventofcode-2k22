module.exports.run = data => {
  const lines = data.map(line => line.split(","));

  const q1 = lines.reduce((acc, line) => {
	if (!line) {
		return acc;
	}


	const [a, b] = line;

	if (a === undefined || b === undefined) {
		return acc;
	}

	const pA = a.split("-").map(n => n >> 0);
	const pB = b.split("-").map(n => n >> 0);

	if (
		(pA[0] <= pB[0] && pA[1] >= pB[1]) ||
		(pB[0] <= pA[0] && pB[1] >= pA[1])
	) {
		acc.q1++;
	}

	if (
		(pA[0] <= pB[0] || pA[0] <= pB[1]) && 
		(pA[1] >= pB[0] || pA[1] >= pB[1])		
	) {
		acc.q2++;
	}


	return acc;	
  }, {q1: 0, q2: 0});


  console.log(q1);
};
