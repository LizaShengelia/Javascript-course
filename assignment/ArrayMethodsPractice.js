
//1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((liza, gio) => liza + gio, 0);
console.log(bankDepositSum);

//2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;
console.log(numDeposits1000);

//3
const { depositss, withdrawall } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.depositss += cur) : (sums.withdrawall += cur);
      sums[cur > 0 ? 'depositss' : 'withdrawall'] += cur;
      return sums;
    },
    { depositss: 0, withdrawall: 0 }
  );

console.log(depositss, withdrawall);

//4
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const expections = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'on',
    'is',
    'with',
    'in',
    'and',
  ];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (expections.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('and here is another title with a EXAMPLE'));
