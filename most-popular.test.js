it("should increment the counter with the provided key", function() {
  expect(incrementCounter({a:1}, "a")).toEqual(2);
  expect(incrementCounter({a:1}, "b")).toEqual(1);
});

it("should find the most popular", function() {
  expect(findMostPopularLetter("abbaaac")).toEqual(["a"]);
  expect(findMostPopularLetter("vroom")).toEqual(["o"]);
  expect(findMostPopularLetter("cabba")).toEqual(["a","b"]);
});
