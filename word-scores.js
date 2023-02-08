/**
 * if a letter-only string, calculates the Scrabble value of the word, based on 
 * scores in LETTER_SCORES object; one non-letter character will result in NULL
 * @param {string} word - string to calculate score for 
 * @returns calculated score (if valid string), or NULL if invalid
 */
function calcWordScore(word, board=LETTER_SCORES) {
  let score = 0;

  for (let char of word) {
    if (char.toUpperCase() in board) {
      score += board[char.toUpperCase()];
    } else {
      return null;
    }
  }

  return score;
}

/**
 * takes an array and calculates the Scrabble score for each valid string in the
 * array (i.e. those with only letters and no numbers/special characters); builds
 * new array of scores (for valid strings) and NULL for invalid inputs
 * @param {array} words - array of words to for which scores will be calculated
 * @returns - new array of scores and NULLS, in same order as passed array
 */
function checkAndCalcWordScores(words) {
  return words.map(word => calcWordScore(word));
}

const LETTER_SCORES = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};