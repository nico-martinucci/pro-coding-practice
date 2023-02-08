"use strict";

/**
 * increments the provided frequency counter at the provided key, incl. if this
 * is the first time the key is being counter
 * @param {object} counter - frequency counter to be incremented
 * @param {key} key - key who's value should be incremented
 * @returns new frequency value at that key
 */
function incrementCounter(counter, key) {
  counter[key] = (counter[key] || 0) + 1;

  return counter[key];
}

/**
 * finds the most frequent value(s) in a frequency counter
 * @param {object} counter - frequency counter 
 * @returns array with most frequent value(s)
 */
function findMostFrequent(counter) {
  let mostFrequentLetters = [];
  let highestFrequency = 0;

  for (let key in counter) {
    if (counter[key] > highestFrequency) {
      highestFrequency = counter[key];
      mostFrequentLetters = [key];
    } else if (counter[key] === highestFrequency) {
      mostFrequentLetters.push(key);
    }
  }

  return mostFrequentLetters;
}

/**
 * determines the highest frequency letter(s) in a given word
 * @param {string} word - word to be evaluated for letter frequency 
 * @returns array of most frequent letter(s)
 */
function findMostPopularLetter(word) {
  const letterFrequency = {};

  for (let char of word) {
    incrementCounter(letterFrequency, char);
  }

  return findMostFrequent(letterFrequency);
}
