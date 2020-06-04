// Solved this problem with Bobby
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  const verticalJoin = transpose(letters).map((ls) => ls.join(''));
  const allWords = horizontalJoin.concat(verticalJoin);

  //   console.log(allWords);

  for (l of allWords) {
    // console.log('l:', l);
    if (l.includes(word) || l.split('').reverse().join('').includes(word)) {
      return true;
    }
  }
  return false;
};

const transpose = function (matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!newMatrix[j]) {
        newMatrix[j] = [];
      }
      newMatrix[j].push(matrix[i][j]);
    }
  }
  return newMatrix;
};

module.exports = wordSearch;
