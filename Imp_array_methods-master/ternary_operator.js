function grade(n) {
  const score =
    n >= 60
      ? `1st Division`
      : n >= 50 && n < 60
      ? `2nd Division`
      : n >= 33 && n < 50
      ? ` 3rd Division`
      : `Fail`;
  return score;
}

console.log(grade(67));
