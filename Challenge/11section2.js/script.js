const calcAverageHumanAge = function (ages) {
  //1
  const dogAfeToHuman = ages.map(function (num) {
    if (num <= 2) {
      return 2 * num;
    } else {
      return 16 + num * 4;
    }
  });
  //2
  const old = dogAfeToHuman.filter(function (age) {
    return age > 18;
  });

  //3
  const average = old.reduce(function (acc, mov) {
    return (acc + mov) / old.length;
  }, 0);

  console.log(dogAfeToHuman);
  console.log(old);
  console.log(average);
};
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
