const _WINDOW = 14;

module.exports.run = data => {
  data = data[0].split("");

  for (const index in data) {
    const buffer = data.slice(index, parseInt(index) + _WINDOW).reduce((acc, letter, currentIndex) => {
      if (!(letter in acc)) {
        acc[letter] = parseInt(index) + parseInt(currentIndex);
      }

      return acc;
    }, {});

    if (Object.keys(buffer).length > (_WINDOW - 1)) {
      console.log(buffer)
    }
  }
};
