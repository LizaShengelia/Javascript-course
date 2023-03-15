const calcAverageHumanAge = ages => {
  const answer = ages
    .map(num => (num <= 2 ? 2 * num : 16 + num * 4))
    .filter(age => age > 18)
    .reduce((acc, mov, i, array) => (acc + mov) / array.length, 0);
  console.log(answer);
};
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

Test data:
§ Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// const movementsUsd = movements1.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementsUsd = movements1.map(mov => mov * euroToUsd);
//console.log(movementsUsd);
