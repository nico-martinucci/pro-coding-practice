it("should find the scores for each word", function() {
  expect(checkAndCalcWordScores(["a", "b", "c"])).toEqual([1, 3, 3]);
  expect(checkAndCalcWordScores(["apple", "banana", "cherry"])).toEqual([9, 8, 14]);
  expect(checkAndCalcWordScores(["ha", "sh", "yo", "ax", "hm"]))
    .toEqual([5, 5, 5, 9, 7]);
});

it("should handle non-letter chars by returning null for word", function() {
  expect(checkAndCalcWordScores(["hi!!!", "hello???"])).toEqual([null, null]);
  expect(checkAndCalcWordScores(["When", "I'm", "64"])).toEqual([10, null, null]);
  expect(checkAndCalcWordScores(["what", "", "a", "", "strange", "", "arrray", "!"]))
    .toEqual([10, 0, 1, 0, 8, 0, 9, null]);
});
